import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { updateUserInfoFetchingSelector } from "features/Profile/store/selectors";

import TextFieldControl from "shared/libs/controllers/TextFieldControl";
import Button from "shared/UI/Button";

import { signUpFetchingSelector } from "../../store/selectors";
import { signUpFetching } from "../../store/reducers";

import { ISignUp } from "./types";
import { signUpSchema } from "./validations";

const SignUp: FC = () => {
  const loading = useSelector(signUpFetchingSelector);
  const updateLoading = useSelector(updateUserInfoFetchingSelector);
  const dispatch = useDispatch();

  const { handleSubmit, control } = useForm<ISignUp>({
    mode: "onChange",
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async ({ email, password }: ISignUp) => {
    dispatch(signUpFetching({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signUp-form">
      <TextFieldControl
        name="email"
        labelText="Почта"
        placeholder="Почта"
        control={control}
        autoComplete="off"
        className="signUp-form__field"
      />

      <TextFieldControl
        name="password"
        labelText="Пароль"
        placeholder="Пароль"
        type="password"
        control={control}
        autoComplete="off"
        className="signUp-form__field"
      />

      <TextFieldControl
        name="confirm_password"
        labelText="Подтвердите пароль"
        placeholder="Подтвердите пароль"
        type="password"
        control={control}
        className="signUp-form__field"
      />

      <Button type="submit" disabled={loading || updateLoading} variant="contained" className="signUp-form__button">
        Регистрация
      </Button>
    </form>
  );
};

export default SignUp;
