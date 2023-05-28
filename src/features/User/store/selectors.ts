import { createSelector } from "@reduxjs/toolkit";

import { IApplicationState } from "app/store/types";

// import { IUserProductInfo } from "./../components/AddProductForm/types";
// import { EWeekDays, TUserOutputSelector } from "./types";

const selectState = (state: IApplicationState) => state.user;

export const userInfoFetchingSelector = createSelector(selectState, state => state.userInfo.fetching);
export const userInfoErrorSelector = createSelector(selectState, state => state.userInfo.error);
export const userInfoSelector = createSelector(selectState, state => state.userInfo.data);

export const updateUserInfoFetchingSelector = createSelector(selectState, state => state.updateUserInfo.fetching);
export const updateUserInfoSelector = createSelector(selectState, state => state.updateUserInfo.data);
export const updateUserInfoErrorSelector = createSelector(selectState, state => state.updateUserInfo.error);

export const userProductsSelector = createSelector(selectState, state => state.userProducts);
export const userProductsByWeekGroupedDaySelector = createSelector(selectState, state => state.userProductsByWeekDays);
export const userProductsInWeekSelector = createSelector(selectState, state => state.userProductsInWeek);
export const userTotalCaloriesInWeekSelector = createSelector(selectState, state => state.totalGetCaloriesInWeek);
export const userTotalAverageCaloriesInWeekSelector = createSelector(
  selectState,
  state => state.totalGetAverageCaloriesInDay
);
export const userTotalExpenditureAverageCaloriesInDaySelector = createSelector(
  selectState,
  state => state.totalExpenditureAverageCaloriesInDay
);
export const userTotalGetCaloriesInWeekSelector = createSelector(selectState, state => state.totalGetCaloriesInWeek);
export const userTotalAverageRecommendedCaloriesInDaySelector = createSelector(
  selectState,
  state => state.totalAverageRecommendedCaloriesInDay
);
export const userTotalRecommendedCaloriesInWeekSelector = createSelector(
  selectState,
  state => state.totalRecommendedCaloriesInWeek
);

// export const userProductsByWeekDaySelector = (day: EWeekDays): TUserOutputSelector<IUserProductInfo | null> =>
//   createSelector(selectState, state => state.userProductsByWeek[day]);

export const productAddModalisOpenSelector = createSelector(selectState, state => state.productAddModalisOpen);
