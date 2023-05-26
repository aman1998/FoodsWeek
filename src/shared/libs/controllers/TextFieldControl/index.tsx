import { Controller } from "react-hook-form";
import { FC } from "react";
import TextField from "shared/UI/TextField";

import { TInputControlProps } from "./types";

const TextFieldControl: FC<TInputControlProps> = ({
  name = "",
  labelText,
  control,
  type = "text",
  defaultValue = "",
  ...props
}) => (
  <Controller
    name={name}
    defaultValue={defaultValue}
    control={control}
    render={({ field: { value, onChange }, fieldState: { error } }) => (
      <TextField
        {...props}
        value={value}
        onChange={onChange}
        type={type}
        label={error?.message || labelText}
        error={!!error}
        // helperText={errorMessage}
      />
    )}
  />
);

export default TextFieldControl;
