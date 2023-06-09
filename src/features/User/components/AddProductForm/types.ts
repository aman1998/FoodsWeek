import { EWeekDays } from "features/User/store/types";

export interface IAddProductFormProps {
  day: EWeekDays;
}

export interface IProductOption {
  id: string;
  label: string;
  value: IProduct;
}

export enum EProductNutrientsResponseData {
  energy = "Energy", // calories from data
  protein = "Protein",
  fat = "Total lipid (fat)",
  carbohydrate = "Carbohydrate",
}

export enum EProductNutrients {
  calories = "calories",
  protein = "protein",
  fat = "fat",
  carbohydrate = "carbohydrate",
}

export interface IProduct {
  name: string;
  [EProductNutrients.calories]: number;
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
  nutrientName: EProductNutrientsResponseData;
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
