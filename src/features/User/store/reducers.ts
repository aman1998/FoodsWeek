import { createSlice } from "@reduxjs/toolkit";

import { IPayloadAction } from "app/store/types";
import { defaultState } from "app/store/constants";

import { calculateDailyCalorieExpenditure } from "shared/utils/calories";

import { getFoodCaloriesByWeight } from "../utils/eneryCount";

// import { calculateWeeklyCalorieExpenditure } from "./../../../shared/utils/calories";
import { defaultProductsByWeekDays, defaultProductsInWeek } from "./constants";
import { IUserState, IUserInfoData, IUserInfoDefaultData, EWeekDays } from "./types";

const initialState: IUserState = {
  userInfo: defaultState,
  userProducts: [],
  userProductsByWeekDays: defaultProductsByWeekDays,
  userProductsInWeek: defaultProductsInWeek,
  updateUserInfo: defaultState,
  productAddModalisOpen: false,

  totalGetCaloriesInWeek: 0,
  totalGetAverageCaloriesInDay: 0,
  totalExpenditureCaloriesInWeek: 0,
  totalExpenditureAverageCaloriesInDay: 0,
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
      const { userProductsByWeekDays } = state;

      if (userProducts) {
        const groupedData = userProducts.reduce(
          (acc, { day, ...rest }) => {
            const { product, weight } = rest;
            const { nutrients } = acc[day];

            nutrients.totalCalories += getFoodCaloriesByWeight(product.calories, weight);
            nutrients.totalCarbohydrate += getFoodCaloriesByWeight(product.carbohydrate, weight);
            nutrients.totalFat += getFoodCaloriesByWeight(product.fat, weight);
            nutrients.totalProtein += getFoodCaloriesByWeight(product.protein, weight);

            if (acc[day].products.length) {
              acc[day].products.push(rest);
            } else {
              acc[day].products = [rest];
            }
            return acc;
          },
          { ...userProductsByWeekDays }
        );

        state.userProducts = userProducts;
        state.userProductsByWeekDays = groupedData;
        state.userProductsInWeek = Object.entries(groupedData).map(([day, data]) => ({
          day: day as EWeekDays,
          nutrients: data.nutrients,
        }));

        state.totalGetCaloriesInWeek = Object.values(groupedData).reduce((acc, item) => {
          acc += item.nutrients.totalCalories;
          return acc;
        }, 0);
        state.totalGetAverageCaloriesInDay = Math.round(state.totalGetCaloriesInWeek / 7);
      }
      if (state.userInfo.data) {
        const { gender, height, weight, activateLevel } = state.userInfo.data;

        state.totalExpenditureAverageCaloriesInDay = Math.round(
          calculateDailyCalorieExpenditure(gender, weight.value, height.value, 25, activateLevel)
        );
        state.totalExpenditureCaloriesInWeek = Math.round(state.totalExpenditureAverageCaloriesInDay * 7);
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
