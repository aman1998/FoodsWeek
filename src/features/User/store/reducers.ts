import { createSlice } from "@reduxjs/toolkit";

import { IPayloadAction } from "app/store/types";
import { defaultState } from "app/store/constants";

import { getFoodCaloriesByWeight } from "../utils/eneryCount";

import { userProductsByWeekDaysDefault } from "./constants";
import { IUserState, IUserInfoData, IUserInfoDefaultData, EWeekDays } from "./types";

const initialState: IUserState = {
  userInfo: defaultState,
  userProducts: [],
  userProductsByWeekDays: userProductsByWeekDaysDefault,
  userProductsInWeek: [],
  updateUserInfo: defaultState,
  productAddModalisOpen: false,
  totalCaloriesInWeek: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userInfoFetching(state: IUserState) {
      state.userInfo.fetching = true;
    },
    userInfoSuccess(state: IUserState, action: IPayloadAction<IUserInfoData>) {
      const { userProducts } = action.payload;
      const { userProductsByWeekDays } = state;

      if (userProducts) {
        const groupedData = userProducts.reduce(
          (acc, { day, ...rest }) => {
            const { product, weight } = rest;

            const caloriesTotalCount = getFoodCaloriesByWeight(product.calories, weight);
            acc[day].totalEnergyByDay = acc[day].totalEnergyByDay + caloriesTotalCount;

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
        state.userInfo = { ...defaultState, data: action.payload };
        state.userProductsInWeek = Object.keys(groupedData).map(day => ({
          day: day as EWeekDays,
          totalEnergyByDay: state.userProductsByWeekDays[day as EWeekDays]?.totalEnergyByDay,
        }));
        state.totalCaloriesInWeek = state.userProductsInWeek.reduce((acc, item) => {
          acc += item.totalEnergyByDay;
          return acc;
        }, 0);
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
