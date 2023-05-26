import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import TextFieldControl from "shared/libs/controllers/TextFieldControl";
import Button from "shared/UI/Button";

import { signInFetchingSelector } from "../../store/selectors";
import { signInFetching } from "../../store/reducers";

import { TSignIn } from "./types";
import { signInSchema } from "./validations";

const SignIn: FC = () => {
  const loading = useSelector(signInFetchingSelector);
  const dispatch = useDispatch();

  const { handleSubmit, control } = useForm<TSignIn>({
    mode: "onChange",
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = ({ email, password }: TSignIn) => {
    dispatch(signInFetching({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signIn-form">
      <TextFieldControl
        name="email"
        labelText="Почта"
        placeholder="Почта"
        control={control}
        margin="normal"
        className="signIn-form__field"
      />

      <TextFieldControl
        name="password"
        labelText="Пароль"
        placeholder="Пароль"
        type="password"
        control={control}
        margin="dense"
        className="signIn-form__field"
      />

      <Button type="submit" disabled={loading} variant="contained" className="signIn-form__button">
        Войти
      </Button>
    </form>
  );
};

export default SignIn;
