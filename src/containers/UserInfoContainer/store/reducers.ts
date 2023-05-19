import { createSlice } from "@reduxjs/toolkit";

import { IUserState, IUserInfo, IUserInfoDefaultData, IAuthInfo } from "../store/types";

import { IPayloadAction } from "../../../store/types";
import { defaultState } from "../../../store/constants";

const initialState: IUserState = {
  authInfo: { ...defaultState, fetching: true }, // probably need refactoring
  isAuth: false,
  userInfo: defaultState,
  updateUserInfo: defaultState,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authInfoFetching(state: IUserState) {
      state.authInfo.fetching = true;
    },
    authInfoSuccess(state: IUserState, action: IPayloadAction<IAuthInfo>) {
      state.authInfo = { ...defaultState, data: action.payload };
    },
    authInfoError(state: IUserState, action) {
      state.authInfo = { ...defaultState, error: action.payload };
    },

    changeIsAuth(state: IUserState, action: IPayloadAction<boolean>) {
      state.isAuth = action.payload;
    },

    userInfoFetching(state: IUserState) {
      state.userInfo.fetching = true;
    },
    userInfoSuccess(state: IUserState, action: IPayloadAction<IUserInfo>) {
      state.userInfo.data = action.payload;
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
    },
    updateUserError(state: IUserState, action) {
      state.updateUserInfo = { ...defaultState, error: action.payload };
    },

    resetUserInfo(state: IUserState) {
      state.userInfo = defaultState;
      state.updateUserInfo = defaultState;
      state.isAuth = false;
    },
  },
});

export const {
  authInfoError,
  authInfoFetching,
  authInfoSuccess,

  changeIsAuth,

  userInfoFetching,
  userInfoSuccess,
  userInfoError,

  updateUserError,
  updateUserInfoFetching,
  updateUserSuccess,

  resetUserInfo,
} = userSlice.actions;

export default userSlice.reducer;
