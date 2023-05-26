import { createSelector } from "@reduxjs/toolkit";

import { IApplicationState } from "app/store/types";

import {} from "../components/AddProductForm/types";

const selectState = (state: IApplicationState) => state.user;

export const userInfoFetchingSelector = createSelector(selectState, state => state.userInfo.fetching);
export const userInfoErrorSelector = createSelector(selectState, state => state.userInfo.error);
export const userInfoSelector = createSelector(selectState, state => state.userInfo.data);

export const updateUserInfoFetchingSelector = createSelector(selectState, state => state.updateUserInfo.fetching);
export const updateUserInfoSelector = createSelector(selectState, state => state.updateUserInfo.data);
export const updateUserInfoErrorSelector = createSelector(selectState, state => state.updateUserInfo.error);

export const userProductsSelector = createSelector(selectState, state => state.userProducts);
export const userProductsByWeekDaySelector = createSelector(selectState, state => state.userProductsByWeek);

export const productAddModalisOpenSelector = createSelector(selectState, state => state.productAddModalisOpen);
