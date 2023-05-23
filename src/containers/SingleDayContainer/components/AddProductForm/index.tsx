import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { useForm } from "react-hook-form";

import Button from "../../../../UI/Button";
import SelectControl from "../../../../components/controllers/SelectControl";

import { addProductFormSchema } from "./validations";
import { EProductTypes, IAddProductForm } from "./types";
import { optionsAddProductType } from "./constants";

const AddProductForm: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IAddProductForm>({
    mode: "onChange",
    defaultValues: {
      type: EProductTypes.breakfast,
    },
    resolver: yupResolver(addProductFormSchema),
  });

  const onSubmit = (values: IAddProductForm) => {
    console.log("values =>", values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SelectControl
        control={control}
        name="type"
        options={optionsAddProductType}
        errorMessage={errors.type?.message}
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddProductForm;
