import { IRequestHandler } from "../../../store/types";

export interface IUserInfoDefaultData {
  id: string;
  text: string;
}

export interface IUserInfo {
  id: string;
}

export interface IUserState {
  userInfo: IRequestHandler<IUserInfo>;
  updateUserInfo: IRequestHandler<unknown>;
}
