import { StandardTextFieldProps } from "@mui/material";
import { IControl } from "app/types/control";

export interface IOptions {
  value: string | number;
  label: string;
}

export type ISelectControlProps = {
  options: IOptions[];
} & StandardTextFieldProps &
  IControl;
