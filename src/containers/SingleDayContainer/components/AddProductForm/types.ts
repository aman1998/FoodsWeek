export interface IAddProductForm {
  type: string;
  productName: string;
}

export enum EProductTypes {
  breakfast = "breakfast",
  brunch = "brunch",
  lunch = "lunch",
  dinner = "dinner",
}
