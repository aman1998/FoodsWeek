import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import TextFieldControl from "../../../../components/controllers/TextFieldControl";
import Button from "../../../../UI/Button";

import { signUpFetchingSelector } from "../../store/selectors";
import { signUpFetching } from "../../store/reducers";

import { updateUserInfoFetchingSelector } from "../../../UserInfoContainer/store/selectors";

import { ISignUp } from "./types";
import { signUpSchema } from "./validations";
import styles from "./styles.module.scss";

const SignUp: FC = () => {
  const loading = useSelector(signUpFetchingSelector);
  const updateLoading = useSelector(updateUserInfoFetchingSelector);
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ISignUp>({
    mode: "onChange",
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async ({ email, password }: ISignUp) => {
    dispatch(signUpFetching({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <TextFieldControl
        name="email"
        labelText="Почта"
        placeholder="Почта"
        control={control}
        autoComplete="off"
        className={styles["form__field"]}
        errorMessage={errors?.email?.message}
      />

      <TextFieldControl
        name="password"
        labelText="Пароль"
        placeholder="Пароль"
        type="password"
        control={control}
        autoComplete="off"
        className={styles["form__field"]}
        errorMessage={errors?.password?.message}
      />

      <TextFieldControl
        name="confirm_password"
        labelText="Подтвердите пароль"
        placeholder="Подтвердите пароль"
        type="password"
        control={control}
        className={styles["form__field"]}
        errorMessage={errors?.confirm_password?.message}
      />

      <Button
        type="submit"
        disabled={loading || updateLoading}
        variant="contained"
        className={styles["form__button"]}
        text="Регистрация"
      />
    </form>
  );
};

export default SignUp;
