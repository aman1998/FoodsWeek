import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { debounce } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { productsInstance } from "app/API";

import { updateUserInfoFetching } from "features/User/store/reducers";
import { updateUserInfoFetchingSelector, userProductsSelector } from "features/User/store/selectors";

import AutocompleteControl from "shared/libs/controllers/AutocompleteControl";
import SelectControl from "shared/libs/controllers/SelectControl";
import TextFieldControl from "shared/libs/controllers/TextFieldControl";
import Button from "shared/UI/Button";

import { addProductFormSchema } from "./validations";
import {
  EProductTypes,
  IUserProductInfo,
  IProductOption,
  IProductDataValues,
  EProductNutrients,
  EProductNutrientsResponseData,
  IAddProductFormProps,
} from "./types";
import { optionsAddProductType } from "./constants";

const AddProductForm: FC<IAddProductFormProps> = ({ day }) => {
  const [options, setOptions] = useState<IProductOption[] | null>(null);
  const [optionsLoading, setOptionsLoading] = useState(false);

  const updateLoading = useSelector(updateUserInfoFetchingSelector);
  const userProducts = useSelector(userProductsSelector);

  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { isValid, isDirty },
  } = useForm<IUserProductInfo>({
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
          [EProductNutrients.calories]:
            item.foodNutrients.find(nutr => nutr.nutrientName === EProductNutrientsResponseData.energy)?.value || 0,
          [EProductNutrients.protein]:
            item.foodNutrients.find(nutr => nutr.nutrientName === EProductNutrientsResponseData.protein)?.value || 0,
          [EProductNutrients.fat]:
            item.foodNutrients.find(nutr => nutr.nutrientName === EProductNutrientsResponseData.fat)?.value || 0,
          [EProductNutrients.carbohydrate]:
            item.foodNutrients.find(nutr => nutr.nutrientName === EProductNutrientsResponseData.carbohydrate)?.value ||
            0,
        },
      });
    });

    setOptions(optionsArray);
  }, 1000);

  const onSubmit = (values: IUserProductInfo) => {
    const newValues = { ...values, day: day };
    dispatch(updateUserInfoFetching({ userProducts: [...userProducts, newValues] }));
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
        labelText="Choose product"
      />
      <TextFieldControl
        labelText="weight (G)"
        placeholder="weight (G)"
        name="weight"
        defaultValue={100}
        control={control}
        InputProps={{ inputProps: { min: 1 } }}
      />
      <Button
        loading={updateLoading}
        disabled={updateLoading || !isDirty || !isValid}
        type="submit"
        className="add-product-form__btn"
      >
        Add
      </Button>
    </form>
  );
};

export default AddProductForm;
