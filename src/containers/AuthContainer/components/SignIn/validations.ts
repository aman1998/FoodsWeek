import * as Yup from "yup";

export const signInSchema = Yup.object().shape({
  email: Yup.string().email("Неправильный формат").required("Это поле обязательно"),
  password: Yup.string().required("Это поле обязательно"),
});
