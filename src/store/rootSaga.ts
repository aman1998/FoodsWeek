import { all, fork } from "redux-saga/effects";

import singleDayFaga from "../containers/SingleDayContainer/store/effects";
import stocksSaga from "../containers/DaysContainer/store/effects";
import authSaga from "../containers/AuthContainer/store/effects";
import userSaga from "../containers/ProfileContainer/store/effects";

function* rootSaga(): Generator {
  yield all([fork(stocksSaga)]);
  yield all([fork(singleDayFaga)]);
  yield all([fork(authSaga)]);
  yield all([fork(userSaga)]);
}

export default rootSaga;
