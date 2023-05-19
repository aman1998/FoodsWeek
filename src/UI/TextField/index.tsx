import { TextFieldProps } from "@mui/material";
import MUITextField from "@mui/material/TextField";
import { FC } from "react";

const TextField: FC<TextFieldProps> = ({ ...props }) => <MUITextField {...props} />;
export default TextField;
