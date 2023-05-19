import { createSelector } from "@reduxjs/toolkit";

import { IApplicationState } from "../../../store/types";

import { IAuthState } from "./types";

const selectState = (state: IApplicationState) => state.auth;

export const authModalIsOpenSelector = createSelector(selectState, (state: IAuthState) => state.authModalIsOpen);

export const signInFetchingSelector = createSelector(selectState, (state: IAuthState) => state.signIn.fetching);

export const signUpFetchingSelector = createSelector(selectState, (state: IAuthState) => state.signUp.fetching);

export const signOutFetchingSelector = createSelector(selectState, (state: IAuthState) => state.signOut.fetching);

export const resetEmailPasswordFetchingSelector = createSelector(
  selectState,
  (state: IAuthState) => state.resetEmailPassword.fetching
);

export const authTypeSelector = createSelector(selectState, (state: IAuthState) => state.authType);
