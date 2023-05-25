import { FC } from "react";
import { useDispatch } from "react-redux";

import Button from "UI/Button";

import { EAuthTypes } from "../../types";
import { changeAuthType } from "../../store/reducers";

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
            <p className="auth-form-text">
              Нет аккаунта?{" "}
              <Button variant="text" onClick={() => handleForm(EAuthTypes.signup)} className="auth-form-btn">
                Регистрация
              </Button>
            </p>
            <p className="auth-form-text">
              Забыли пароль{" "}
              <Button variant="text" onClick={() => handleForm(EAuthTypes.reset)} className="auth-form-btn">
                Сброс пароля
              </Button>
            </p>
          </>
        );
      case EAuthTypes.signup:
        return (
          <p className="auth-form-text">
            Есть аккаунт?{" "}
            <Button variant="text" className="auth-form-btn" onClick={() => handleForm(EAuthTypes.signin)}>
              Вход в аккаунт
            </Button>
          </p>
        );
      case EAuthTypes.reset:
        return (
          <p className="auth-form-text">
            <Button variant="text" className="auth-form-btn" onClick={() => handleForm(EAuthTypes.signin)}>
              Вернуться назад
            </Button>
          </p>
        );
      default:
        return <></>;
    }
  };

  return getText();
};

export default AuthFormText;
