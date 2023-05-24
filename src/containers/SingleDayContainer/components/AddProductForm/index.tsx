import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { debounce } from "@mui/material";

import AutocompleteControl from "../../../../components/controllers/AutocompleteControl";
import Button from "../../../../UI/Button";
import SelectControl from "../../../../components/controllers/SelectControl";
import { productsInstance } from "../../../../common/API";

import { addProductFormSchema } from "./validations";
import { EProductTypes, IAddProductForm, IProductOption, IProductDataValues, EProductNutrients } from "./types";
import { optionsAddProductType } from "./constants";

const AddProductForm: FC = () => {
  const [options, setOptions] = useState<IProductOption[] | null>(null);
  const [optionsLoading, setOptionsLoading] = useState(false);

  const { handleSubmit, control } = useForm<IAddProductForm>({
    mode: "onChange",
    defaultValues: {
      type: EProductTypes.breakfast,
    },
    resolver: yupResolver(addProductFormSchema),
  });

  const handleProductSearch = debounce(async (value: string) => {
    setOptionsLoading(true);
    const response = await productsInstance(`search?query=${value}`);
    setOptionsLoading(false);
    const data: IProductDataValues[] = await response.data.foods;
    const optionsArray: IProductOption[] = [];

    data.forEach(item => {
      optionsArray.push({
        id: String(item.id),
        label: item.description,
        value: {
          name: item.description,
          [EProductNutrients.energy]:
            item.foodNutrients.find(nutr => nutr.nutrientName === EProductNutrients.energy)?.value || 0,
          [EProductNutrients.protein]:
            item.foodNutrients.find(nutr => nutr.nutrientName === EProductNutrients.protein)?.value || 0,
          [EProductNutrients.fat]:
            item.foodNutrients.find(nutr => nutr.nutrientName === EProductNutrients.fat)?.value || 0,
          [EProductNutrients.carbohydrate]:
            item.foodNutrients.find(nutr => nutr.nutrientName === EProductNutrients.carbohydrate)?.value || 0,
        },
      });
    });

    setOptions(optionsArray);
  }, 1000);

  const onSubmit = (values: IAddProductForm) => {
    console.log("values =>", values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SelectControl control={control} name="type" options={optionsAddProductType} />
      <AutocompleteControl
        control={control}
        options={options?.length ? options : []}
        name="product"
        handleSearch={handleProductSearch}
        loading={optionsLoading}
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddProductForm;
