import { EAuthTypes } from "../types";

import { TRecordOf, IRequestHandler } from "../../../store/types";

export interface IAuthInfo {
  email: string;
  id: string;
}

export interface IEmailPassword {
  email: string;
  password: string;
}

export type TEmailPasswordReset = Omit<IEmailPassword, "password">;

export interface IFirebaseAuth {
  user: {
    uid: string;
    email: string;
  };
}

export interface ISignOut {
  callback: () => void;
}

export interface IAuthState {
  authInfo: IRequestHandler<IAuthInfo>;
  isAuth: boolean;
  isAuthCheckDone: boolean;
  signIn: IRequestHandler<unknown>;
  signUp: IRequestHandler<unknown>;
  signOut: IRequestHandler<unknown>;
  resetEmailPassword: IRequestHandler<unknown>;
  authModalIsOpen: boolean;
  authType: EAuthTypes;
}

export type TAuthApplication = TRecordOf<IAuthState> | undefined;
export type TAuthStateProps = (Readonly<IAuthState> & TAuthApplication) | undefined;
