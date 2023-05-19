import { StandardTextFieldProps } from "@mui/material";
import { Control } from "react-hook-form";

export interface IControl {
  errorMessage?: string;
  labelText?: string;
  control: Control<any>;
  name: string;
}

export type TInputControlProps = StandardTextFieldProps & IControl;
