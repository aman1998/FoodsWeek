import MUIButton from "@mui/material/Button";
import cn from "classnames";
import { FC } from "react";

import { IButton } from "./types";

const Button: FC<IButton> = ({ children, className, variant = "contained", ...props }) => (
  <MUIButton
    {...props}
    variant={variant}
    className={cn("button", className, {
      outlinedVariantBtn: variant === "outlined",
      textVariantBtn: variant === "text",
      containedVariantBtn: variant === "contained",
    })}
  >
    <span>{children}</span>
  </MUIButton>
);
export default Button;
