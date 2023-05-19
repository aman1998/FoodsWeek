import { createSelector } from "@reduxjs/toolkit";

import { IApplicationState } from "../../../store/types";

import { IUserState } from "./types";

const selectState = (state: IApplicationState) => state.user;

export const authInfoFetchingSelector = createSelector(selectState, (state: IUserState) => state.authInfo.fetching);
export const authInfoerrorSelector = createSelector(selectState, (state: IUserState) => state.authInfo.error);
export const authInfoSelector = createSelector(selectState, (state: IUserState) => state.authInfo.data);

export const isAuthSelector = createSelector(selectState, (state: IUserState) => state.isAuth);

export const userInfoFetchingSelector = createSelector(selectState, (state: IUserState) => state.userInfo.fetching);
export const userInfoerrorSelector = createSelector(selectState, (state: IUserState) => state.userInfo.error);
export const userInfoSelector = createSelector(selectState, (state: IUserState) => state.userInfo.data);

export const updateUserInfoFetchingSelector = createSelector(
  selectState,
  (state: IUserState) => state.updateUserInfo.fetching
);
export const updateUserInfoSelector = createSelector(selectState, (state: IUserState) => state.updateUserInfo.data);
export const updateUserInfoErrorSelector = createSelector(
  selectState,
  (state: IUserState) => state.updateUserInfo.error
);
