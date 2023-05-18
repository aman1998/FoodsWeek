import { createSlice } from "@reduxjs/toolkit";

import { IPayloadAction, ISingleRequestErrorPayload } from "../../../store/types";

import { ISingleDayState, TSingleDaySuccess } from "./types";

const initialState: ISingleDayState = {
  singleDay: {},
};

export const stocksSlice = createSlice({
  name: "singleDay",
  initialState,
  reducers: {
    singleDayFetching(state, action: IPayloadAction<string>) {
      const id = action.payload;
      state.singleDay = {
        ...state.singleDay,
        [id]: {
          ...state.singleDay[id],
          fetching: true,
          error: null,
        },
      };
    },
    singleDaySuccess(state, action: IPayloadAction<TSingleDaySuccess>) {
      const { id, data } = action.payload;
      state.singleDay = {
        ...state.singleDay,
        [id]: {
          fetching: false,
          data,
          error: null,
        },
      };
    },
    singleDayError(state, action: IPayloadAction<ISingleRequestErrorPayload>) {
      const { id, data } = action.payload;
      state.singleDay = {
        ...state.singleDay,
        [id]: {
          ...state.singleDay[id],
          fetching: false,
          error: data,
        },
      };
    },
  },
});

export const { singleDayFetching, singleDayError, singleDaySuccess } = stocksSlice.actions;

export default stocksSlice.reducer;
