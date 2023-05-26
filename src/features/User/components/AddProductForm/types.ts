import { EWeekDays } from "features/User/store/types";

export interface IAddProductFormProps {
  day: EWeekDays;
}

export interface IProductOption {
  id: string;
  label: string;
  value: IProduct;
}

export enum EProductNutrientsFull {
  energy = "Energy",
  protein = "Protein",
  fat = "Total lipid (fat)",
  carbohydrate = "Carbohydrate",
}

export enum EProductNutrients {
  energy = "energy",
  protein = "protein",
  fat = "fat",
  carbohydrate = "carbohydrate",
}

export interface IProduct {
  name: string;
  [EProductNutrients.energy]: number;
  [EProductNutrients.protein]: number;
  [EProductNutrients.fat]: number;
  [EProductNutrients.carbohydrate]: number;
}

export interface IUserProductInfo {
  day: EWeekDays;
  type: string;
  weight: number;
  product: IProduct;
}

export interface IFoodNutrient {
  value: number;
  unitName: string;
  percentDailyValue: number;
  nutrientName: EProductNutrientsFull;
}

export type TProductValues = Record<EProductNutrients, number>;
export interface IProductDataValues {
  description: string;
  foodNutrients: IFoodNutrient[];
  fdcId: number;
}

export enum EProductTypes {
  breakfast = "breakfast",
  brunch = "brunch",
  lunch = "lunch",
  dinner = "dinner",
}
