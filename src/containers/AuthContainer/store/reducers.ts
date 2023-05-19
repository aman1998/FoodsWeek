import { createSlice } from "@reduxjs/toolkit";

import { EAuthTypes } from "../types";

import { IPayloadAction } from "../../../store/types";
import { defaultState } from "../../../store/constants";

import { IAuthState, IAuthInfo } from "./types";

const initialState: IAuthState = {
  authInfo: defaultState,
  isAuth: false,
  signIn: defaultState,
  signUp: defaultState,
  signOut: defaultState,
  resetEmailPassword: defaultState,
  authModalIsOpen: false,
  authType: EAuthTypes.signin,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authInfoFetching(state) {
      state.authInfo.fetching = true;
    },
    authInfoSuccess(state, action: IPayloadAction<IAuthInfo>) {
      state.authInfo = { ...defaultState, data: action.payload };
    },
    authInfoError(state, action) {
      state.authInfo = { ...defaultState, error: action.payload };
    },

    changeIsAuth(state, action: IPayloadAction<boolean>) {
      state.isAuth = action.payload;
    },

    changeAuthModalIsOpen(state: IAuthState, action: IPayloadAction<boolean>) {
      state.authModalIsOpen = action.payload;
      state.authType = EAuthTypes.signin;
    },
    changeAuthType(state: IAuthState, action: IPayloadAction<EAuthTypes>) {
      state.authType = action.payload;
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    signInFetching(state: IAuthState, _) {
      state.signIn.fetching = true;
    },
    signInSuccess(state: IAuthState, action: IPayloadAction<IAuthInfo>) {
      state.signIn = { ...defaultState, data: action.payload };
    },
    signInError(state: IAuthState, action: IPayloadAction<string>) {
      state.signIn = { ...defaultState, error: action.payload };
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    signUpFetching(state: IAuthState, _) {
      state.signUp.fetching = true;
    },
    signUpSuccess(state: IAuthState, action: IPayloadAction<unknown>) {
      state.signUp = { ...defaultState, data: action.payload };
    },
    signUpError(state: IAuthState, action: IPayloadAction<unknown>) {
      state.signUp = { ...defaultState, error: action.payload };
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    signOutFetching(state: IAuthState, _) {
      state.signOut.fetching = true;
    },
    signOutSuccess(state: IAuthState, action: IPayloadAction<unknown>) {
      state.signOut = { ...defaultState, data: action.payload };
    },
    signOutError(state: IAuthState, action: IPayloadAction<unknown>) {
      state.signOut = { ...defaultState, error: action.payload };
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    resetEmailPasswordFetching(state: IAuthState, _) {
      state.resetEmailPassword.fetching = true;
    },
    resetEmailPasswordSuccess(state: IAuthState, action: IPayloadAction<unknown>) {
      state.resetEmailPassword = { ...defaultState, data: action.payload };
    },
    resetEmailPasswordError(state: IAuthState, action: IPayloadAction<unknown>) {
      state.resetEmailPassword = { ...defaultState, error: action.payload };
    },
  },
});

export const {
  authInfoError,
  authInfoFetching,
  authInfoSuccess,

  changeIsAuth,

  changeAuthModalIsOpen,
  changeAuthType,

  signInError,
  signInFetching,
  signInSuccess,

  signOutError,
  signOutFetching,
  signOutSuccess,

  signUpError,
  signUpFetching,
  signUpSuccess,

  resetEmailPasswordError,
  resetEmailPasswordFetching,
  resetEmailPasswordSuccess,
} = authSlice.actions;

export default authSlice.reducer;
