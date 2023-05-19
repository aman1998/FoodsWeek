import { EAuthTypes } from "./types";

export const getTitle = (authType: EAuthTypes): string => {
  switch (authType) {
    case EAuthTypes.signin:
      return "Вход в аккаунт";
    case EAuthTypes.signup:
      return "Регистрация";
    case EAuthTypes.reset:
      return "Сброс пароля";
    default:
      return "";
  }
};
