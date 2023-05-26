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
import { auth } from "app/firebase/firebase-config";
import { IPayloadAction } from "app/store/types";
import { showNotification, ENotificationType } from "app/utils/notifications";

import {
  updateUserInfoFetching,
  resetUserInfo,
  userInfoFetching,
} from "../../../pages/ProfilePage/ProfileContainer/store/reducers";

import {
  authInfoError,
  authInfoFetching,
  authInfoSuccess,
  changeIsAuth,
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
      yield put(userInfoFetching());
    } else {
      put(resetUserInfo());
      put(changeIsAuth(false));
      if (window.location.pathname !== "/") {
        showNotification(ENotificationType.error, "Не удалось войти в аккаунт");
      }
    }
  } catch (error) {
    if (window.location.pathname !== "/") {
      showNotification(ENotificationType.error, "Не удалось войти в аккаунт");
    }
    yield put(authInfoError(String(error)));
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
      showNotification(ENotificationType.success, "Вы успешно вошли в аккаунт!");
      yield put(userInfoFetching());
    } else {
      showNotification(ENotificationType.error, "Неверные данные!");
    }
  } catch (e) {
    yield put(signInError("Ошибка!"));
    showNotification(ENotificationType.error, "Произошла ошибка, возможно неверные данные");
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
      yield put(updateUserInfoFetching(null));
      yield put(changeAuthModalIsOpen(false));
      showNotification(ENotificationType.success, "Вы успешно вошли в аккаунт!");
    } else {
      showNotification(ENotificationType.error, "Неверные данные!");
    }
  } catch (e) {
    yield put(signUpError("Ошибка!"));
    showNotification(ENotificationType.error, "Что-то пошло не так!");
  }
}

function* signOut(action: IPayloadAction<ISignOut>) {
  try {
    yield signOutFirebase(auth);
    const { callback } = action.payload;
    yield callback();
    yield put(resetUserInfo());
    yield put(changeIsAuth(false));
    showNotification(ENotificationType.success, "Вы успешно вышли из аккаунта!");
  } catch {
    showNotification(ENotificationType.error, "Произошла ошибка, повторите снова");
  }
}

function* resetEmailPassword(action: IPayloadAction<TEmailPasswordReset>) {
  try {
    const { email } = action.payload;

    yield sendPasswordResetEmail(auth, email);
    yield put(changeAuthModalIsOpen(false));
    yield put(resetEmailPasswordSuccess("На почту отправлено письмо!"));
    showNotification(ENotificationType.success, "На почту отправлено письмо!");
  } catch {
    yield put(resetEmailPasswordError("Произошла ошибка, повторите снова"));
    showNotification(ENotificationType.error, "Произошла ошибка, возможно неверные данные");
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
