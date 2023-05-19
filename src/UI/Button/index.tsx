import MUIButton from "@mui/material/Button";
import cn from "classnames";
import { FC } from "react";

import { IButton } from "./types";

const Button: FC<IButton> = ({ text, className, ...props }) => (
  <MUIButton className={cn("button", className)} {...props}>
    <span>{text}</span>
  </MUIButton>
);
export default Button;
