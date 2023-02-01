import * as Yup from "yup";

export const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}/;

export const CUSTOM_ERROR_MESSAGE =
  "Password must have at least one capital letter and one number";

export const commonAuthSchema = {
  email: Yup.string().required().email().max(55),
  password: Yup.string()
    .required()
    .matches(PASSWORD_REGEX, CUSTOM_ERROR_MESSAGE)
    .min(6)
    .max(55),
};

export const registerSchema = Yup.object().shape({
  ...commonAuthSchema,
  username: Yup.string().required().min(3).max(55),
});

export const registerValues = {
  username: "",
  email: "",
  password: "",
};
