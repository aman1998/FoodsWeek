import * as Yup from "yup";

export const profileSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  yearBirth: Yup.number().required("Required"),
  activate: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  weight: Yup.object().shape({
    type: Yup.string().required("Required"),
    value: Yup.number().min(1).required("Required"),
  }),
  height: Yup.object().shape({
    type: Yup.string().required("Required"),
    value: Yup.number().min(1).required("Required"),
  }),
});
