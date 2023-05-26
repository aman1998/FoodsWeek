import { createSlice } from "@reduxjs/toolkit";

import { IPayloadAction } from "app/store/types";
import { defaultState } from "app/store/constants";

import { userProductsByWeekDefault } from "./contants";
import { IUserState, IUserInfoData, IUserInfoDefaultData, TProductsByWeekDay } from "./types";

const initialState: IUserState = {
  userInfo: defaultState,
  userProducts: [],
  userProductsByWeek: userProductsByWeekDefault,
  updateUserInfo: defaultState,
  productAddModalisOpen: false,
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
      if (userProducts) {
        const groupedData: TProductsByWeekDay = userProducts.reduce((acc, item) => {
          const { day, ...rest } = item;
          if (acc[day]) {
            acc[day].push(rest);
          } else {
            acc[day] = [rest];
          }
          return acc;
        }, {} as TProductsByWeekDay);

        state.userProducts = userProducts;
        state.userProductsByWeek = { ...state.userProductsByWeek, ...groupedData };
      }

      state.userInfo = { ...defaultState, data: action.payload };
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
