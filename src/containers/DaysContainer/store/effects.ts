import { AxiosResponse, AxiosError } from "axios";
import { takeLatest, all, call, put } from "redux-saga/effects";
import instance from "app/API";

import { stocksListFetching, stocksListError, stocksListSuccess } from "./reducers";
import { TDaysListResponse } from "./types";

function* stocksList() {
  try {
    const response: AxiosResponse<TDaysListResponse> = yield call(instance.get, `day/market/batch`, {
      params: {
        symbols: "aapl,amzn,tsla,msft,goog,fb,nflx,NVDA,VZ,JNJ,PG,XOM,intc",
        types: "quote,logo",
        filter: "latestPrice,changePercent,url",
      },
    });
    yield put(stocksListSuccess(response.data));
  } catch (error) {
    if (error instanceof AxiosError) {
      yield put(
        stocksListError({
          code: error.code,
          message: error.message,
          status: error.status,
        })
      );
    }
    console.error(error);
  }
}

function* Saga(): Generator {
  yield all([takeLatest(stocksListFetching.type, stocksList)]);
}

export default Saga;
