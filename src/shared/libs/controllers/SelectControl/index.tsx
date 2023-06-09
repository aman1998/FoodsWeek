import { FC } from "react";
import { Controller } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";

// import FormControl from "@mui/material/FormControl";
import TextField from "shared/UI/TextField";

import { ISelectControlProps } from "./types";

const SelectControl: FC<ISelectControlProps> = ({ name = "", labelText, control, options, ...props }) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      // <FormControl className={className} error={!!errorMessage}>
      <>
        <TextField {...props} select onChange={onChange} value={value || ""} label={error?.message || labelText}>
          {options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {!!error && <FormHelperText>{error.message}</FormHelperText>}
      </>
      // </FormControl>
    )}
  />
);

export default SelectControl;
