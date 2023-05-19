import { put, takeLatest, all, select } from "redux-saga/effects";
import { query, where, getDocs, collection, Query, doc, setDoc } from "firebase/firestore";

import {
  updateUserError,
  updateUserInfoFetching,
  updateUserSuccess,
  userInfoError,
  userInfoFetching,
  userInfoSuccess,
} from "../store/reducers";
import { IUserInfo } from "../store/types";

import { authInfoSelector } from "../../AuthContainer/store/selectors";

import { database } from "../../../firebase-config";
import { IPayloadAction } from "../../../store/types";

import { showNotification, ENotificationType } from "./../../../utils/notifications";
import { userInfoSelector } from "./selectors";

function* userInfo() {
  try {
    const { id } = yield select(authInfoSelector);

    const usersRef: Query<unknown> = yield collection(database, "users");

    const q = query(usersRef, where("id", "==", id));
    const usersSnapshot: unknown = yield getDocs(q);

    // @ts-ignore
    const users = usersSnapshot.docs.map((doc: any) => doc.data());

    if (users.length) yield put(userInfoSuccess(users[0]));
  } catch (e) {
    yield put(userInfoError(e));
  }
}

function* updateUserInfo(action: IPayloadAction<any>) {
  try {
    const { id } = yield select(authInfoSelector);
    const user: IUserInfo = yield select(userInfoSelector);

    const userRef = doc(database, "users", id);
    yield setDoc(userRef, { id, ...action.payload }, { merge: true });
    yield put(updateUserSuccess({ id, text: "success" }));
    yield put(userInfoSuccess({ ...user, ...action.payload }));
    showNotification(ENotificationType.success, "Данные обновлены!");
  } catch (e) {
    yield put(updateUserError(e));
    showNotification(ENotificationType.error, "Произошла ошибка, повторите снова");
  }
}

function* Saga(): Generator {
  yield all([takeLatest(updateUserInfoFetching.type, updateUserInfo)]);
  yield all([takeLatest(userInfoFetching.type, userInfo)]);
}

export default Saga;
