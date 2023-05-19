import { SelectProps } from "@mui/material";
import { ReactNode } from "react";

export interface ISelectProps extends SelectProps {
  children: ReactNode;
}
