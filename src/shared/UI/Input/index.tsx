import MUIInput, { OutlinedInputProps } from "@mui/material/OutlinedInput";
import { FC } from "react";

const Input: FC<OutlinedInputProps> = ({ ...props }) => <MUIInput {...props} />;

export default Input;
