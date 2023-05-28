import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { yearsSelectOptions } from "shared/utils/date";
import TextFieldControl from "shared/libs/controllers/TextFieldControl";
import SelectControl from "shared/libs/controllers/SelectControl";
import Button from "shared/UI/Button";

import { updateUserInfoFetchingSelector, userInfoSelector, userInfoFetchingSelector } from "../../store/selectors";
import { updateUserInfoFetching } from "../../store/reducers";
import { EGender, IUserInfo } from "../../store/types";

import { optionsActivaty, optionsUnitWeight, optionsUnitHeight, optionsGender } from "./constants";
import { profileSchema } from "./validations";

const ProfileForm: FC = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { isValid, isDirty },
  } = useForm<IUserInfo>({ mode: "onBlur", resolver: yupResolver(profileSchema) });

  const updateUserLoading = useSelector(updateUserInfoFetchingSelector);
  const userLoading = useSelector(userInfoFetchingSelector);
  const user = useSelector(userInfoSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    reset({
      name: user?.name || "",
      yearBirth: user?.yearBirth,
      gender: user?.gender || EGender.female,
      height: {
        type: user?.height?.type || "sm",
        value: user?.height?.value || 0,
      },
      weight: {
        type: user?.weight?.type || "kg",
        value: user?.weight?.value || 60,
      },
      activateLevel: user?.activateLevel || "minimal",
    });
  }, [reset, user]);

  const onSubmit = (values: IUserInfo) => {
    dispatch(updateUserInfoFetching(values));
  };

  if (userLoading) {
    return <></>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="profile-form">
      <div className="profile-form__header">
        <h1 className="profile-form__title">Profile</h1>
        <Button
          loading={updateUserLoading}
          disabled={!isValid || updateUserLoading || userLoading || !isDirty}
          type="submit"
          variant="contained"
          className="profile-form__button"
        >
          Save
        </Button>
      </div>
      <div className="profile-form-item">
        <div className="profile-form-item__title">Name</div>
        <TextFieldControl name="name" control={control} margin="normal" className="profile-form-item__field" />
      </div>
      <div className="profile-form-item">
        <div className="profile-form-item__title">Gender</div>
        <SelectControl control={control} name="gender" options={optionsGender} className="profile-form-item__field" />
      </div>
      <div className="profile-form-item">
        <div className="profile-form-item__title">Year</div>
        <SelectControl
          control={control}
          name="yearBirth"
          options={yearsSelectOptions}
          className="profile-form-item__field"
        />
      </div>
      <div className="profile-form-item">
        <div className="profile-form-item__title">Height value</div>
        <TextFieldControl
          name="height.value"
          type="number"
          InputProps={{ inputProps: { min: 1 } }}
          control={control}
          className="profile-form-item__field"
        />
        <SelectControl
          control={control}
          name="height.type"
          options={optionsUnitWeight}
          className="profile-form-item__select-field"
        />
      </div>
      <div className="profile-form-item">
        <div className="profile-form-item__title">Weight value</div>
        <TextFieldControl
          name="weight.value"
          type="number"
          InputProps={{ inputProps: { min: 1 } }}
          control={control}
          className="profile-form-item__field"
        />
        <SelectControl
          control={control}
          name="weight.type"
          options={optionsUnitHeight}
          className="profile-form-item__select-field"
        />
      </div>
      <div className="profile-form-item">
        <div className="profile-form-item__title">Activate</div>
        <SelectControl
          control={control}
          name="activateLevel"
          options={optionsActivaty}
          className="profile-form-item__field"
        />
      </div>
    </form>
  );
};

export default ProfileForm;
