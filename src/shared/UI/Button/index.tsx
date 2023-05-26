import CircularProgress from "@mui/material/CircularProgress";
import MUIButton from "@mui/material/Button";
import cn from "classnames";
import { FC } from "react";

import { IButton } from "./types";

const Button: FC<IButton> = ({ children, className, variant = "contained", loading, ...props }) => (
  <MUIButton
    {...props}
    variant={variant}
    className={cn("button", className, {
      outlinedVariantBtn: variant === "outlined",
      textVariantBtn: variant === "text",
      containedVariantBtn: variant === "contained",
    })}
  >
    {loading && <CircularProgress className="button__circular-progress" color="inherit" />}
    <span>{children}</span>
  </MUIButton>
);
export default Button;
