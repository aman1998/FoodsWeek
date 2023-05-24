import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { debounce } from "@mui/material";

import AutocompleteControl from "../../../../components/controllers/AutocompleteControl";
import Button from "../../../../UI/Button";
import SelectControl from "../../../../components/controllers/SelectControl";
import { productsInstance } from "../../../../common/API";

import { addProductFormSchema } from "./validations";
import { EProductTypes, IAddProductForm } from "./types";
import { optionsAddProductType } from "./constants";

interface example {
  foodSearchCriteria: {
    generalSearchInput: string;
  };
}
const AddProductForm: FC = () => {
  const [options, setOptions] = useState<{ id: string; label: string }[] | null>(null);

  const {
    handleSubmit,
    control,
    // setValue,
  } = useForm<IAddProductForm>({
    mode: "onChange",
    defaultValues: {
      type: EProductTypes.breakfast,
    },
    resolver: yupResolver(addProductFormSchema),
  });

  const handleProductChecked = (id: string | null) => {
    console.log("id =>", id);
  };

  const handleProductSearch = debounce(async (value: string) => {
    const response = await productsInstance(`search?query=${value}`);
    const data: example[] = await response.data.foods;
    const optionsArray: { id: string; label: string }[] = [];

    data.forEach((_, i) => {
      optionsArray.push({ id: String(i), label: String(i) });
    });

    setOptions(optionsArray);
    console.log("response", response.data);
  }, 1000);

  const onSubmit = (values: IAddProductForm) => {
    console.log("values =>", values);
  };

  console.log("options =>", options);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SelectControl control={control} name="type" options={optionsAddProductType} />
      <AutocompleteControl
        control={control}
        options={options?.length ? options : []}
        name="productName"
        onChange={handleProductChecked}
        handleSearch={handleProductSearch}
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddProductForm;
