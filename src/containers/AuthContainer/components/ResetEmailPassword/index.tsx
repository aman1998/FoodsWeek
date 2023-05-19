import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../../../UI/Button";
import TextFieldControl from "../../../../components/controllers/TextFieldControl";

import { TEmailPasswordReset } from "../../store/types";
import { resetEmailPasswordFetchingSelector } from "../../store/selectors";
import { resetEmailPasswordFetching } from "../../store/reducers";

import { resetEmailPasswordSchema } from "./validations";
import styles from "./styles.module.scss";

const ResetEmailPassword: FC = () => {
  const loading = useSelector(resetEmailPasswordFetchingSelector);
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TEmailPasswordReset>({
    mode: "onChange",
    resolver: yupResolver(resetEmailPasswordSchema),
  });

  const onSubmit = ({ email }: TEmailPasswordReset) => {
    dispatch(resetEmailPasswordFetching({ email }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <TextFieldControl
        name="email"
        labelText="Почта"
        placeholder="Почта"
        control={control}
        margin="normal"
        errorMessage={errors?.email?.message}
        className={styles["form__field"]}
      />

      <Button
        type="submit"
        disabled={loading}
        variant="contained"
        className={styles["form__button"]}
        text="Отправить"
      />
    </form>
  );
};

export default ResetEmailPassword;
