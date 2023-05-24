import { Control } from "react-hook-form";

export interface IControl {
  labelText?: string;
  control: Control<any>;
  name: string;
}
