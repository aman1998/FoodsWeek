import { OutputSelector, SelectorArray } from "reselect";

import { IApplicationState, IRequestHandler } from "app/store/types";

import { EActivityLevel, EGender, EHeightTypes, EWeightTypes } from "shared/libs/types/user";

import { IUserProductInfo } from "../components/AddProductForm/types";

export interface IUserInfoDefaultData {
  id: string;
  text: string;
}

export interface IBodyParameters<T> {
  type: T;
  value: number;
}

export interface ITotalNutrients {
  totalCalories: number;
  totalCarbohydrate: number;
  totalProtein: number;
  totalFat: number;
}

export interface IProductsByWeekDay {
  nutrients: ITotalNutrients;
  products: Omit<IUserProductInfo, "day">[];
}

export type TProductsByWeekDays = Record<EWeekDays, IProductsByWeekDay>;

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
  weight: IBodyParameters<EWeightTypes>;
  height: IBodyParameters<EHeightTypes>;
  activateLevel: EActivityLevel;
}

export interface IProductsShortInfo {
  day: EWeekDays;
  nutrients: ITotalNutrients;
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
  totalConsumedCaloriesInWeek: number;
  totalConsumedAverageCaloriesInDay: number;
  totalBurnedCaloriesInWeek: number;
  totalBurnedAverageCaloriesInDay: number;
  totalRecommendedCaloriesInWeek: number;
  totalAverageRecommendedCaloriesInDay: number;
}

export type TUserOutputSelector<T> = OutputSelector<SelectorArray, T, (s: IApplicationState) => T>;
