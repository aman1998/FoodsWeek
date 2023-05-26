import { IRequestHandler } from "app/store/types";

import { IUserProductInfo } from "../components/AddProductForm/types";

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
  userProducts: IUserProductInfo[];
}

export interface IUserState {
  userInfo: IRequestHandler<IUserInfo>;
  updateUserInfo: IRequestHandler<unknown>;
  productAddModalisOpen: boolean;
}

export interface ISingleDayResponse {
  symbol: string;
  changePercent: number;
  priceDate: string;
  uClose: number;
  uOpen: number;
  uHigh: number;
  uLow: number;
}

export interface ISingleDay extends ISingleDayResponse {
  number: number;
}
