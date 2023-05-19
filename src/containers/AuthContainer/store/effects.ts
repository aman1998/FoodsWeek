import { put, takeLatest, all } from "redux-saga/effects";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as signOutFirebase,
  sendPasswordResetEmail,
} from "firebase/auth";

import {
  changeIsAuth,
  authInfoSuccess,
  updateUserInfoFetching,
  resetUserInfo,
} from "../../UserInfoContainer/store/reducers";

import { auth } from "../../../firebase-config";
import { IPayloadAction } from "../../../store/types";

import { IEmailPassword, IFirebaseAuth, ISignOut, TEmailPasswordReset } from "./types";
import {
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
  yield all([takeLatest(signInFetching.type, signIn)]);
  yield all([takeLatest(signUpFetching.type, signUp)]);
  yield all([takeLatest(signOutFetching.type, signOut)]);
  yield all([takeLatest(resetEmailPasswordFetching.type, resetEmailPassword)]);
}

export default Saga;
