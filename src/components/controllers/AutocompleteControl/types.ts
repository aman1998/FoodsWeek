import { Control, Path, FieldValues } from "react-hook-form";

export interface IAutoCompleteSelected {
  id: string;
  label: string;
}
export interface IAutocompleteControlProps<O extends IAutoCompleteSelected, TField extends FieldValues> {
  control: Control<TField>;
  name: Path<TField>;
  options: O[];
  placeholder?: string;
  onChange?: (id: string | null) => void;
  handleSearch?: (value: string) => void;
}
