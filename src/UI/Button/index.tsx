import MUIButton from "@mui/material/Button";
import cn from "classnames";
import { FC } from "react";

import { IButton } from "./types";

const Button: FC<IButton> = ({ text, className, variant = "contained", ...props }) => (
  <MUIButton
    {...props}
    variant={variant}
    className={cn("button", className, {
      outlinedVariantBtn: variant === "outlined",
      textVariantBtn: variant === "text",
      containedVariantBtn: variant === "contained",
    })}
  >
    <span>{text}</span>
  </MUIButton>
);
export default Button;
