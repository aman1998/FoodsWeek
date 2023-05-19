import { createSlice } from "@reduxjs/toolkit";

import { IUserState, IUserInfo, IUserInfoDefaultData } from "../store/types";

import { IPayloadAction } from "../../../store/types";
import { defaultState } from "../../../store/constants";

const initialState: IUserState = {
  userInfo: defaultState,
  updateUserInfo: defaultState,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
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
} = userSlice.actions;

export default userSlice.reducer;
