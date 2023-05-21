import { IRequestHandler } from "../../../store/types";

export interface IUserInfoDefaultData {
  id: string;
  text: string;
}

export interface IBodyParameters {
  type: string;
  value: number;
}

export interface IUserInfo {
  name: string;
  yearBirth: number;
  weight: IBodyParameters;
  height: IBodyParameters;
  activate: number;
}

export interface IUserState {
  userInfo: IRequestHandler<IUserInfo>;
  updateUserInfo: IRequestHandler<unknown>;
}
