import * as Yup from "yup";

export const resetEmailPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Неправильный формат").required("Это поле обязательно"),
});
