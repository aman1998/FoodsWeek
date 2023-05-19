import MUIButton from "@mui/material/Button";
import { FC } from "react";

import styles from "./styles.module.scss";
import { IButton } from "./types";

const Button: FC<IButton> = ({ text, ...props }) => (
  <MUIButton className={styles.button} {...props}>
    <span>{text}</span>
  </MUIButton>
);
export default Button;
