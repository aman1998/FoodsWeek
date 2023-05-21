import { FC } from "react";
import { Controller } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
// import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

import { ISelectControlProps } from "./types";

const SelectControl: FC<ISelectControlProps> = ({ name = "", control, options, errorMessage, ...props }) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value } }) => (
      // <FormControl className={className} error={!!errorMessage}>
      <>
        <TextField {...props} select onChange={onChange} value={value || ""}>
          {options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {!!errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
      </>
      // </FormControl>
    )}
  />
);

export default SelectControl;
