import { all, fork } from "redux-saga/effects";

import authSaga from "../../features/Auth/store/effects";
import userSaga from "../../features/Profile/store/effects";

function* rootSaga(): Generator {
  yield all([fork(authSaga)]);
  yield all([fork(userSaga)]);
}

export default rootSaga;
