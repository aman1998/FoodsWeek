import * as Yup from "yup";

export const addProductFormSchema = Yup.object().shape({
  type: Yup.string().required("Это поле обязательно"),
});
