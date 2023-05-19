import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  email: Yup.string().email("Неправильный формат").required("Это поле обязательно"),
  password: Yup.string().min(8, "Должно быть не меньше 8 символов").required("Это поле обязательно"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password")], "Пароли должны совпадать")
    .required("Это поле обязательно"),
});
