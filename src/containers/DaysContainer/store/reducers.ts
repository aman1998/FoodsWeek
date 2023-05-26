import { createSlice } from "@reduxjs/toolkit";
import { IPayloadAction, IRequestError } from "app/store/types";
import { defaultState } from "app/store/constants";

import { IDaysState, TDaysListResponse, IDayData, EDays } from "./types";

const initialState: IDaysState = {
  stocks: defaultState,
};

export const stocksSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {
    // stocks list
    stocksListFetching(state) {
      state.stocks.fetching = true;
      state.stocks.error = null;
    },
    stocksListSuccess(state, action: IPayloadAction<TDaysListResponse>) {
      const data = Object.keys(action.payload).reduce((acc: IDayData[], key) => {
        const item = key as EDays;
        const newData: IDayData = {
          type: item,
          latestPrice: action.payload[item].quote.latestPrice,
          changePercent: action.payload[item].quote.changePercent,
          logoUrl: action.payload[item].logo.url,
        };
        acc.push(newData);
        return acc;
      }, []);

      state.stocks.fetching = false;
      state.stocks.error = null;
      state.stocks.data = data;
    },
    stocksNewList(state, action: IPayloadAction<IDayData[]>) {
      state.stocks.data = action.payload;
    },
    stocksListError(state, action: IPayloadAction<IRequestError>) {
      state.stocks.fetching = false;
      state.stocks.error = action.payload;
    },
  },
});

export const { stocksListFetching, stocksListSuccess, stocksListError, stocksNewList } = stocksSlice.actions;

export default stocksSlice.reducer;
