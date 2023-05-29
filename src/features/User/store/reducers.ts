import { createSlice } from "@reduxjs/toolkit";

import { IPayloadAction } from "app/store/types";
import { defaultState } from "app/store/constants";

import { calculateDailyCalorieBurned } from "shared/utils/calories";
import { getAge } from "shared/utils/date";

import { getFoodCaloriesByWeight } from "../utils/eneryCount";

import { defaultProductsByWeekDays, defaultProductsInWeek } from "./constants";
import { IUserState, IUserInfoData, IUserInfoDefaultData, EWeekDays } from "./types";

const initialState: IUserState = {
  userInfo: defaultState,
  userProducts: [],
  userProductsByWeekDays: defaultProductsByWeekDays,
  userProductsInWeek: defaultProductsInWeek,
  updateUserInfo: defaultState,
  productAddModalisOpen: false,

  totalConsumedCaloriesInWeek: 0,
  totalConsumedAverageCaloriesInDay: 0,
  totalBurnedCaloriesInWeek: 0,
  totalBurnedAverageCaloriesInDay: 0,
  totalRecommendedCaloriesInWeek: 0,
  totalAverageRecommendedCaloriesInDay: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userInfoFetching(state: IUserState) {
      state.userInfo.fetching = true;
    },
    userInfoSuccess(state: IUserState, action: IPayloadAction<IUserInfoData>) {
      state.userInfo = { ...defaultState, data: action.payload };

      const { userProducts } = action.payload;

      if (userProducts) {
        const groupedData = userProducts.reduce(
          (acc, { day, ...rest }) => {
            const { product, weight } = rest;
            const { nutrients } = acc[day];

            const updatedNutrients = {
              totalCalories: nutrients.totalCalories + getFoodCaloriesByWeight(product.calories, weight),
              totalCarbohydrate: nutrients.totalCarbohydrate + getFoodCaloriesByWeight(product.carbohydrate, weight),
              totalFat: nutrients.totalFat + getFoodCaloriesByWeight(product.fat, weight),
              totalProtein: nutrients.totalProtein + getFoodCaloriesByWeight(product.protein, weight),
            };

            const updatedDay = {
              ...acc[day],
              nutrients: updatedNutrients,
              products: [...(acc[day].products || []), rest],
            };

            acc[day] = updatedDay;
            return acc;
          },
          { ...defaultProductsByWeekDays }
        );

        state.userProducts = userProducts;
        state.userProductsByWeekDays = groupedData;
        state.userProductsInWeek = Object.entries(groupedData).map(([day, data]) => ({
          day: day as EWeekDays,
          nutrients: data.nutrients,
        }));

        state.totalConsumedCaloriesInWeek = Object.values(groupedData).reduce(
          (acc, item) => acc + item.nutrients.totalCalories,
          0
        );
        state.totalConsumedAverageCaloriesInDay = Math.round(state.totalConsumedCaloriesInWeek / 7);
      }

      if (state.userInfo.data) {
        const { gender, height, weight, activateLevel, yearBirth } = state.userInfo.data;

        state.totalBurnedAverageCaloriesInDay = Math.round(
          calculateDailyCalorieBurned(
            gender,
            weight.value,
            weight.type,
            height.value,
            height.type,
            getAge(yearBirth),
            activateLevel
          )
        );
        state.totalBurnedCaloriesInWeek = Math.round(state.totalBurnedAverageCaloriesInDay * 7);
      }
    },
    userInfoError(state: IUserState, action) {
      state.userInfo = { ...defaultState, error: action.payload };
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateUserInfoFetching(state: IUserState, _) {
      state.updateUserInfo.fetching = true;
    },
    updateUserSuccess(state: IUserState, action: IPayloadAction<IUserInfoDefaultData>) {
      state.updateUserInfo = { ...defaultState, data: action.payload };
      if (state.productAddModalisOpen) {
        state.productAddModalisOpen = false;
      }
    },
    updateUserError(state: IUserState, action) {
      state.updateUserInfo = { ...defaultState, error: action.payload };
    },

    resetUserInfo(state: IUserState) {
      state.userInfo = defaultState;
      state.updateUserInfo = defaultState;
    },

    handleProductAddModalisOpen(state, action: IPayloadAction<boolean>) {
      state.productAddModalisOpen = action.payload;
    },
  },
});

export const {
  userInfoFetching,
  userInfoSuccess,
  userInfoError,

  updateUserError,
  updateUserInfoFetching,
  updateUserSuccess,

  resetUserInfo,

  handleProductAddModalisOpen,
} = userSlice.actions;

export default userSlice.reducer;
