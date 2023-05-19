import { FC } from "react";
import { useDispatch } from "react-redux";

import Button from "../../../../UI/Button";

import { EAuthTypes } from "../../types";
import { changeAuthType } from "../../store/reducers";

import styles from "./text.module.scss";

const AuthFormText: FC<{ type: string }> = ({ type }) => {
  const dispatch = useDispatch();

  const handleForm = (newType: EAuthTypes) => {
    dispatch(changeAuthType(newType));
  };

  const getText = () => {
    switch (type) {
      case EAuthTypes.signin:
        return (
          <>
            <p className={styles.text}>
              Нет аккаунта?{" "}
              <Button
                variant="text"
                text="Регистрация"
                onClick={() => handleForm(EAuthTypes.signup)}
                className={styles.btn}
              />
            </p>
            <p className={styles.text}>
              Забыли пароль{" "}
              <Button
                variant="text"
                text="Сброс пароля"
                onClick={() => handleForm(EAuthTypes.reset)}
                className={styles.btn}
              />
            </p>
          </>
        );
      case EAuthTypes.signup:
        return (
          <p className={styles.text}>
            Есть аккаунт?{" "}
            <Button
              variant="text"
              text="Вход в аккаунт"
              className={styles.btn}
              onClick={() => handleForm(EAuthTypes.signin)}
            />
          </p>
        );
      case EAuthTypes.reset:
        return (
          <p className={styles.text}>
            <Button
              variant="text"
              text="Вернуться назад"
              className={styles.btn}
              onClick={() => handleForm(EAuthTypes.signin)}
            />
          </p>
        );
      default:
        return <></>;
    }
  };

  return getText();
};

export default AuthFormText;
