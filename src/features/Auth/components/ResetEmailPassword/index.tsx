import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextFieldControl from "shared/libs/controllers/TextFieldControl";
import Button from "shared/UI/Button";

import { TEmailPasswordReset } from "../../store/types";
import { resetEmailPasswordFetchingSelector } from "../../store/selectors";
import { resetEmailPasswordFetching } from "../../store/reducers";

import { resetEmailPasswordSchema } from "./validations";

const ResetEmailPassword: FC = () => {
  const loading = useSelector(resetEmailPasswordFetchingSelector);
  const dispatch = useDispatch();

  const { handleSubmit, control } = useForm<TEmailPasswordReset>({
    mode: "onChange",
    resolver: yupResolver(resetEmailPasswordSchema),
  });

  const onSubmit = ({ email }: TEmailPasswordReset) => {
    dispatch(resetEmailPasswordFetching({ email }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="reset-form">
      <TextFieldControl
        name="email"
        labelText="Почта"
        placeholder="Почта"
        control={control}
        margin="normal"
        className="reset-form__field"
      />

      <Button type="submit" disabled={loading} variant="contained" className="reset-form__button">
        Отправить
      </Button>
    </form>
  );
};

export default ResetEmailPassword;
