import * as Yup from "yup";

import { EProductNutrients } from "./types";

export const productSchema = Yup.object().shape({
  [EProductNutrients.energy]: Yup.number(),
  [EProductNutrients.protein]: Yup.number(),
  [EProductNutrients.fat]: Yup.number(),
  [EProductNutrients.carbohydrate]: Yup.number(),
});

export const addProductFormSchema = Yup.object().shape({
  type: Yup.string().required("Это поле обязательно"),
  product: productSchema.required("Это поле обязательно"),
});
