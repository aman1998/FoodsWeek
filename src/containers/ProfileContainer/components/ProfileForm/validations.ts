import * as Yup from "yup";

export const profileSchema = Yup.object().shape({
  name: Yup.string().required("This is required"),
  yearBirth: Yup.number().required("This is required"),
  activate: Yup.string().required("This is required"),
  gender: Yup.string().required("This is required"),
  weight: Yup.object().shape({
    type: Yup.string().required("This is required"),
    value: Yup.number().required("This is required"),
  }),
  height: Yup.object().shape({
    type: Yup.string().required("This is required"),
    value: Yup.number().required("This is required"),
  }),
});
