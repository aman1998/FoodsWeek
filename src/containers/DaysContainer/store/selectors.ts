import { createSelector } from "@reduxjs/toolkit";

import { IApplicationState } from "store/types";

import { IDaysState } from "./types";

const selectState = (state: IApplicationState) => state.stocks;

export const stocksFetchingSelector = createSelector(selectState, (state: IDaysState) => state.stocks.fetching);
export const stocksDataSelector = createSelector(selectState, (state: IDaysState) => state.stocks.data);
