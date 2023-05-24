import { Controller, FieldValues } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";

import TextField from "../../../UI/TextField";

import { IAutoCompleteSelected, IAutocompleteControlProps } from "./types";

const AutocompleteControl = <O extends IAutoCompleteSelected, TField extends FieldValues>(
  props: IAutocompleteControlProps<O, TField>
): JSX.Element => {
  const { options, name, control, placeholder, loading, onChange: handleOnChange, handleSearch } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <Autocomplete
            value={value ? options.find(option => value === option.id) ?? null : null}
            getOptionLabel={option => option.label}
            onChange={(_: unknown, newValue) => {
              const resolvedId = newValue ? newValue.value : null;
              onChange(resolvedId);
              handleOnChange?.(resolvedId);
            }}
            loading={!!loading}
            options={options}
            renderInput={params => (
              <TextField
                {...params}
                onChange={e => {
                  const newValue = e.target.value;
                  handleSearch?.(newValue);
                }}
                label={error?.message || placeholder}
                error={!!error}
              />
            )}
          />
        </>
      )}
    />
  );
};

export default AutocompleteControl;
