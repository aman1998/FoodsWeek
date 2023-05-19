import MUICheckbox, { CheckboxProps } from "@mui/material/Checkbox";
import { FC } from "react";

const Checkbox: FC<CheckboxProps> = ({ ...props }) => <MUICheckbox {...props} />;
export default Checkbox;
