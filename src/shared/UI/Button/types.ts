import { ReactNode } from "react";
import { ButtonProps } from "@mui/material";

export interface IButton extends ButtonProps {
  loading?: boolean;
  children: ReactNode;
}
