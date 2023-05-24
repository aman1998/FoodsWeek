import * as Yup from "yup";

import { EProductNutrients } from "./types";

export const productSchema = Yup.object().shape({
  [EProductNutrients.energy]: Yup.number().required("Required"),
  [EProductNutrients.protein]: Yup.number().required("Required"),
  [EProductNutrients.fat]: Yup.number().required("Required"),
  [EProductNutrients.carbohydrate]: Yup.number().required("Required"),
});

export const addProductFormSchema = Yup.object().shape({
  type: Yup.string().required("Required"),
  product: productSchema.required("Required"),
  weight: Yup.number().min(1, "Min should be one!").required("Required"),
});
