import { AxiosResponse } from "axios";
import { takeLatest, all, call, put } from "redux-saga/effects";

import { IPayloadAction } from "@store/types";

import instance from "../../../common/API";

import { singleDayFetching, singleDaySuccess } from "./reducers";
import { ISingleDayResponse } from "./types";

function* singleDay(action: IPayloadAction<string>) {
  try {
    const id = action.payload;
    const response: AxiosResponse<ISingleDayResponse[]> = yield call(instance.get, `day/${id}/chart`, {
      params: {
        last: 30,
      },
    });
    const data = response.data.map((item, i) => Object.assign({}, item, { number: i + 1 }));
    yield put(
      singleDaySuccess({
        id: action.payload,
        data,
      })
    );
  } catch (e) {
    console.error(e);
  }
}

function* Saga(): Generator {
  yield all([takeLatest(singleDayFetching.type, singleDay)]);
}

export default Saga;
