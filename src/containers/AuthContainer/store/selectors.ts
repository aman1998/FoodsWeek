import { createSelector } from "@reduxjs/toolkit";

import { IApplicationState } from "../../../store/types";

const selectState = (state: IApplicationState) => state.auth;

export const authInfoFetchingSelector = createSelector(selectState, state => state.authInfo.fetching);
export const authInfoerrorSelector = createSelector(selectState, state => state.authInfo.error);
export const authInfoSelector = createSelector(selectState, state => state.authInfo.data);

export const isAuthSelector = createSelector(selectState, state => state.isAuth);

export const authModalIsOpenSelector = createSelector(selectState, state => state.authModalIsOpen);

export const signInFetchingSelector = createSelector(selectState, state => state.signIn.fetching);

export const signUpFetchingSelector = createSelector(selectState, state => state.signUp.fetching);

export const signOutFetchingSelector = createSelector(selectState, state => state.signOut.fetching);

export const resetEmailPasswordFetchingSelector = createSelector(
  selectState,
  state => state.resetEmailPassword.fetching
);

export const authTypeSelector = createSelector(selectState, state => state.authType);
