import { all, fork } from "redux-saga/effects";

import singleDayFaga from "../../pages/SingleDayPage/SingleDayContainer/store/effects";
import stocksSaga from "../../pages/DaysPage/DaysContainer/store/effects";
import authSaga from "../../features/Auth/store/effects";
import userSaga from "../../pages/ProfilePage/ProfileContainer/store/effects";

function* rootSaga(): Generator {
  yield all([fork(stocksSaga)]);
  yield all([fork(singleDayFaga)]);
  yield all([fork(authSaga)]);
  yield all([fork(userSaga)]);
}

export default rootSaga;
