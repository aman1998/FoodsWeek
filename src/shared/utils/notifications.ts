import cogoToast from "cogo-toast";

export enum ENotificationType {
  success = "success",
  info = "info",
  loading = "loading",
  warn = "warn",
  error = "error",
}

export const showNotification = (type: ENotificationType, text: string): void => {
  switch (type) {
    case ENotificationType.success:
      cogoToast.success(text);
      break;
    case ENotificationType.info:
      cogoToast.info(text);
      break;
    case ENotificationType.loading:
      cogoToast.loading(text);
      break;
    case ENotificationType.warn:
      cogoToast.warn(text);
      break;
    case ENotificationType.error:
      cogoToast.error(text);
      break;
    default:
      cogoToast.error("Неизвестный тип");
  }
};
