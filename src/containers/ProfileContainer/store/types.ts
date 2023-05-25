import { IRequestHandler } from "store/types";

export interface IUserInfoDefaultData {
  id: string;
  text: string;
}

export interface IBodyParameters {
  type: string;
  value: number;
}

export enum EGender {
  male = "male",
  female = "female",
}

export interface IUserInfo {
  name: string;
  yearBirth: number;
  gender: EGender;
  weight: IBodyParameters;
  height: IBodyParameters;
  activate: number;
}

export interface IUserState {
  userInfo: IRequestHandler<IUserInfo>;
  updateUserInfo: IRequestHandler<unknown>;
}
