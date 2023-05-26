import { Control, Path, FieldValues } from "react-hook-form";

export interface IAutoCompleteSelected {
  id: string;
  label: string;
  value: unknown;
}
export interface IAutocompleteControlProps<O extends IAutoCompleteSelected, TField extends FieldValues> {
  control: Control<TField>;
  name: Path<TField>;
  options: O[];
  loading?: boolean;
  labelText?: string;
  onChange?: (id: unknown) => void;
  handleSearch?: (value: string) => void;
}
