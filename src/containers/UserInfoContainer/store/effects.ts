import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { put, takeLatest, all, select, call } from "redux-saga/effects";
import { query, where, getDocs, collection, Query, doc, setDoc } from "firebase/firestore";

import {
  authInfoError,
  authInfoFetching,
  authInfoSuccess,
  changeIsAuth,
  resetUserInfo,
  updateUserError,
  updateUserInfoFetching,
  updateUserSuccess,
  userInfoError,
  userInfoFetching,
  userInfoSuccess,
} from "../store/reducers";
import { IAuthInfo, IUserInfo } from "../store/types";

import { database } from "../../../firebase-config";
import { IPayloadAction } from "../../../store/types";

import { authInfoSelector, userInfoSelector } from "./selectors";

const getAuthChannel = () => {
  const auth = getAuth();

  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, user => {
      if (user) {
        resolve(user);
      } else {
        reject(new Error("Ops!"));
      }
    });
  });
};

function* authInfo() {
  try {
    const user: User = yield call(getAuthChannel);
    if (user) {
      yield put(changeIsAuth(true));
      yield put(authInfoSuccess({ id: user.uid, email: user.email || "" }));
    } else {
      put(resetUserInfo());
    }
  } catch (error) {
    yield put(authInfoError(String(error)));
  }
}

function* userInfo() {
  try {
    const { id }: IAuthInfo = yield select(authInfoSelector);

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
    const { id }: IAuthInfo = yield select(authInfoSelector);
    const user: IUserInfo = yield select(userInfoSelector);

    const userRef = doc(database, "users", id);
    yield setDoc(userRef, { id, ...action.payload }, { merge: true });
    yield put(updateUserSuccess({ id, text: "success" }));
    yield put(userInfoSuccess({ ...user, ...action.payload }));
  } catch (e) {
    yield put(updateUserError(e));
  }
}

function* Saga(): Generator {
  yield all([takeLatest(updateUserInfoFetching.type, updateUserInfo)]);
  yield all([takeLatest(userInfoFetching.type, userInfo)]);
  yield all([takeLatest(authInfoFetching.type, authInfo)]);
}

export default Saga;
