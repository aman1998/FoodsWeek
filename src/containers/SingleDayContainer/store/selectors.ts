import { createSelector, Selector } from "@reduxjs/toolkit";
import { IApplicationState, TNullable } from "app/store/types";

import { ISingleDay, ISingleDayState } from "./types";

const selectState = (state: IApplicationState) => state.singleDay;

export const singleDayFetchingSelector = (id: string): Selector<IApplicationState, boolean> =>
  createSelector(selectState, (state: ISingleDayState) => state.singleDay[id]?.fetching);

export const singleDaySuccessSelector = (id: string): Selector<IApplicationState, TNullable<ISingleDay[]>> =>
  createSelector(selectState, (state: ISingleDayState) => state.singleDay[id]?.data);

export const productAddModalisOpenSelector = createSelector(selectState, state => state.productAddModalisOpen);
