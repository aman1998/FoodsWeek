import { FC } from "react";
import { useDispatch } from "react-redux";

import Button from "../../../../UI/Button";

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
              <Button
                variant="text"
                text="Регистрация"
                onClick={() => handleForm(EAuthTypes.signup)}
                className="auth-form-btn"
              />
            </p>
            <p className="auth-form-text">
              Забыли пароль{" "}
              <Button
                variant="text"
                text="Сброс пароля"
                onClick={() => handleForm(EAuthTypes.reset)}
                className="auth-form-btn"
              />
            </p>
          </>
        );
      case EAuthTypes.signup:
        return (
          <p className="auth-form-text">
            Есть аккаунт?{" "}
            <Button
              variant="text"
              text="Вход в аккаунт"
              className="auth-form-btn"
              onClick={() => handleForm(EAuthTypes.signin)}
            />
          </p>
        );
      case EAuthTypes.reset:
        return (
          <p className="auth-form-text">
            <Button
              variant="text"
              text="Вернуться назад"
              className="auth-form-btn"
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
