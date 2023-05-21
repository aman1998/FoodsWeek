import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../../../UI/Button";
import TextFieldControl from "../../../../components/controllers/TextFieldControl";
import SelectControl from "../../../../components/controllers/SelectControl";
import { yearsSelectOptions } from "../../../../common/utils/date";

import { updateUserInfoFetchingSelector, userInfoSelector, userInfoFetchingSelector } from "../../store/selectors";
import { updateUserInfoFetching } from "../../store/reducers";
import { IUserInfo } from "../../store/types";

import { optionsActivaty, optionsUnit } from "./constants";
import { profileSchema } from "./validations";

const ProfileForm: FC = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<IUserInfo>({ mode: "onBlur", resolver: yupResolver(profileSchema) });

  const updateUserLoading = useSelector(updateUserInfoFetchingSelector);
  const userLoading = useSelector(userInfoFetchingSelector);
  const user = useSelector(userInfoSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    reset({
      name: user?.name || "",
      yearBirth: user?.yearBirth,
      height: {
        type: user?.height.type || "sm",
        value: user?.height.value || 0,
      },
      weight: {
        type: user?.weight.type || "sm",
        value: user?.weight.value || 60,
      },
      activate: 1,
    });
  }, [reset, user]);

  const onSubmit = (values: IUserInfo) => {
    dispatch(updateUserInfoFetching(values));
  };

  if (userLoading) {
    return <>Loading...</>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="profile-form">
      <div className="profile-form__header">
        <h1 className="profile-form__title">Profile</h1>
        <Button
          disabled={!isValid || updateUserLoading || userLoading}
          type="submit"
          variant="contained"
          className="profile-form__button"
          text="Save"
        />
      </div>
      <div className="profile-form-item">
        <div className="profile-form-item__title">Name</div>
        <TextFieldControl
          name="name"
          control={control}
          margin="normal"
          errorMessage={errors?.name?.message}
          className="profile-form-item__field"
        />
      </div>
      <div className="profile-form-item">
        <div className="profile-form-item__title">Year</div>
        <SelectControl
          control={control}
          name="yearBirth"
          options={yearsSelectOptions}
          className="profile-form-item__field"
          errorMessage={errors?.yearBirth?.message}
        />
      </div>
      <div className="profile-form-item">
        <div className="profile-form-item__title">Height value</div>
        <TextFieldControl
          name="height.value"
          type="number"
          inputProps={{
            maxLength: 1,
          }}
          control={control}
          errorMessage={errors.height?.value?.message}
          className="profile-form-item__field"
        />
        <SelectControl
          control={control}
          name="height.type"
          options={optionsUnit}
          className="profile-form-item__select-field"
        />
      </div>
      <div className="profile-form-item">
        <div className="profile-form-item__title">Weight value</div>
        <TextFieldControl
          name="weight.value"
          type="number"
          inputProps={{
            maxLength: 1,
          }}
          control={control}
          errorMessage={errors.weight?.value?.message}
          className="profile-form-item__field"
        />
        <SelectControl
          control={control}
          name="weight.type"
          options={optionsUnit}
          className="profile-form-item__select-field"
        />
      </div>
      <div className="profile-form-item">
        <div className="profile-form-item__title">Activate</div>
        <SelectControl
          control={control}
          name="activate"
          options={optionsActivaty}
          className="profile-form-item__field"
        />
      </div>
    </form>
  );
};

export default ProfileForm;
