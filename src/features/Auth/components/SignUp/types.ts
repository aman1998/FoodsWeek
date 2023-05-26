import { IEmailPassword } from "../../store/types";

export interface ISignUp extends IEmailPassword {
  confirm_password: string;
}
