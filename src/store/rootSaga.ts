import { all, fork } from "redux-saga/effects";

import singleDayFaga from "../containers/SingleDayContainer/store/effects";
import stocksSaga from "../containers/DaysContainer/store/effects";

function* rootSaga(): Generator {
  yield all([fork(stocksSaga)]);
  yield all([fork(singleDayFaga)]);
}

export default rootSaga;
