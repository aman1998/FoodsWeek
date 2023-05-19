import { put, takeLatest, all, call } from "redux-saga/effects";
import {
  getAuth,
  onAuthStateChanged,
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as signOutFirebase,
  sendPasswordResetEmail,
} from "firebase/auth";

import { updateUserInfoFetching, resetUserInfo } from "../../UserInfoContainer/store/reducers";

import { auth } from "../../../firebase-config";
import { IPayloadAction } from "../../../store/types";

import {
  authInfoError,
  authInfoFetching,
  authInfoSuccess,
  changeIsAuth,
  isAuthCheckDone,
  changeAuthModalIsOpen,
  signInError,
  signInFetching,
  signInSuccess,
  signOutFetching,
  signUpError,
  signUpFetching,
  signUpSuccess,
  resetEmailPasswordError,
  resetEmailPasswordFetching,
  resetEmailPasswordSuccess,
} from "./reducers";
import { IEmailPassword, IFirebaseAuth, ISignOut, TEmailPasswordReset } from "./types";

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
      put(changeIsAuth(false));
    }
  } catch (error) {
    yield put(authInfoError(String(error)));
  } finally {
    yield put(isAuthCheckDone(true));
  }
}

function* signIn(action: IPayloadAction<IEmailPassword>) {
  try {
    const { email, password } = action.payload;

    const data: IFirebaseAuth = yield signInWithEmailAndPassword(auth, email, password);

    if (data && data?.user) {
      const { user } = data;
      yield put(changeIsAuth(true));
      yield put(signInSuccess({ id: user.uid, email: user.email || "" }));
      yield put(authInfoSuccess({ id: user.uid, email: user.email || "" }));
      yield put(changeAuthModalIsOpen(false));
    }
  } catch (e) {
    yield put(signInError("Ошибка!"));
  }
}

function* signUp(action: IPayloadAction<IEmailPassword>) {
  try {
    const { email, password } = action.payload;

    const data: IFirebaseAuth = yield createUserWithEmailAndPassword(auth, email, password);

    if (data && data?.user) {
      const { user } = data;
      yield put(changeIsAuth(true));
      yield put(signUpSuccess({ id: user.uid, email: user.email || "" }));
      yield put(authInfoSuccess({ id: user.uid, email: user.email || "" }));
      yield put(updateUserInfoFetching({}));
      yield put(changeAuthModalIsOpen(false));
    }
  } catch (e) {
    yield put(signUpError("Ошибка!"));
  }
}

function* signOut(action: IPayloadAction<ISignOut>) {
  try {
    yield signOutFirebase(auth);
    const { callback } = action.payload;
    yield callback();
    yield put(resetUserInfo());
    yield put(changeIsAuth(false));
  } catch (e) {
    console.error(e);
  }
}

function* resetEmailPassword(action: IPayloadAction<TEmailPasswordReset>) {
  try {
    const { email } = action.payload;

    yield sendPasswordResetEmail(auth, email);
    yield put(changeAuthModalIsOpen(false));
    yield put(resetEmailPasswordSuccess("На почту отправлено письмо!"));
  } catch {
    yield put(resetEmailPasswordError("Произошла ошибка, повторите снова"));
  }
}

function* Saga(): Generator {
  yield all([takeLatest(authInfoFetching.type, authInfo)]);
  yield all([takeLatest(signInFetching.type, signIn)]);
  yield all([takeLatest(signUpFetching.type, signUp)]);
  yield all([takeLatest(signOutFetching.type, signOut)]);
  yield all([takeLatest(resetEmailPasswordFetching.type, resetEmailPassword)]);
}

export default Saga;
