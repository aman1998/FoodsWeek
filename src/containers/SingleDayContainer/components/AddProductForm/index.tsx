import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { debounce } from "@mui/material";

import AutocompleteControl from "../../../../components/controllers/AutocompleteControl";
import Button from "../../../../UI/Button";
import SelectControl from "../../../../components/controllers/SelectControl";
import { productsInstance } from "../../../../common/API";
import TextFieldControl from "../../../../components/controllers/TextFieldControl";

import { addProductFormSchema } from "./validations";
import {
  EProductTypes,
  IAddProductForm,
  IProductOption,
  IProductDataValues,
  EProductNutrients,
  EProductNutrientsFull,
} from "./types";
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
        id: String(item.fdcId),
        label: item.description,
        value: {
          name: item.description,
          [EProductNutrients.energy]:
            item.foodNutrients.find(nutr => nutr.nutrientName === EProductNutrientsFull.energy)?.value || 0,
          [EProductNutrients.protein]:
            item.foodNutrients.find(nutr => nutr.nutrientName === EProductNutrientsFull.protein)?.value || 0,
          [EProductNutrients.fat]:
            item.foodNutrients.find(nutr => nutr.nutrientName === EProductNutrientsFull.fat)?.value || 0,
          [EProductNutrients.carbohydrate]:
            item.foodNutrients.find(nutr => nutr.nutrientName === EProductNutrientsFull.carbohydrate)?.value || 0,
        },
      });
    });

    setOptions(optionsArray);
  }, 1000);

  const onSubmit = (values: IAddProductForm) => {
    console.log("values =>", values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="add-product-form">
      <h1 className="add-product-form__title">Add product</h1>
      <SelectControl control={control} labelText="type" name="type" options={optionsAddProductType} />
      <AutocompleteControl
        control={control}
        options={options?.length ? options : []}
        name="product"
        handleSearch={handleProductSearch}
        loading={optionsLoading}
        labelText="Product"
      />
      <TextFieldControl
        labelText="weight (G)"
        placeholder="weight (G)"
        name="weight"
        defaultValue={100}
        control={control}
        type="number"
        InputProps={{ inputProps: { min: 1 } }}
      />
      <Button type="submit" className="add-product-form__btn">
        Add
      </Button>
    </form>
  );
};

export default AddProductForm;
