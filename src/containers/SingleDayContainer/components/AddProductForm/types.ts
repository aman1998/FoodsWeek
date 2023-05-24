export interface IAddProductForm {
  type: string;
  product: string;
}

export interface IProductOption {
  id: string;
  label: string;
  value: IProduct;
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

export interface IFoodNutrient {
  value: number;
  unitName: string;
  percentDailyValue: number;
  nutrientName: EProductNutrients;
}

export type TProductValues = Record<EProductNutrients, number>;
export interface IProductDataValues {
  description: string;
  foodNutrients: IFoodNutrient[];
  id: number;
}

export enum EProductTypes {
  breakfast = "breakfast",
  brunch = "brunch",
  lunch = "lunch",
  dinner = "dinner",
}
