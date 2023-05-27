import { OutputSelector, SelectorArray } from "reselect";

import { IApplicationState, IRequestHandler } from "app/store/types";

import { IUserProductInfo } from "../components/AddProductForm/types";

export interface IUserInfoDefaultData {
  id: string;
  text: string;
}

export interface IBodyParameters {
  type: string;
  value: number;
}

export interface IProductsByWeekDay {
  totalEnergyByDay: number;
  products: Omit<IUserProductInfo, "day">[];
}

export type TProductsByWeekDays = Record<EWeekDays, IProductsByWeekDay>;

export enum EGender {
  male = "male",
  female = "female",
}

export enum EWeekDays {
  Monday = "monday",
  Tuesday = "tuesday",
  Wednesday = "wednesday",
  Thursday = "thursday",
  Friday = "friday",
  Saturday = "saturday",
  Sunday = "sunday",
}

export interface IUserInfo {
  name: string;
  yearBirth: number;
  gender: EGender;
  weight: IBodyParameters;
  height: IBodyParameters;
  activate: number;
}

export interface IProductsShortInfo {
  day: EWeekDays;
  totalEnergyByDay: number;
}

export interface IUserInfoData extends IUserInfo {
  userProducts?: IUserProductInfo[];
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

export interface IUserState {
  userInfo: IRequestHandler<IUserInfo>;
  updateUserInfo: IRequestHandler<unknown>;
  productAddModalisOpen: boolean;
  userProducts: IUserProductInfo[];
  userProductsByWeekDays: TProductsByWeekDays;
  userProductsInWeek: IProductsShortInfo[];
  totalEnergyInWeek: number;
}

export type TUserOutputSelector<T> = OutputSelector<SelectorArray, T, (s: IApplicationState) => T>;
