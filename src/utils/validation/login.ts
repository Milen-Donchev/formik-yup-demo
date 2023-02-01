import * as Yup from "yup";
import { commonAuthSchema } from "./register";

export const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}/;

export const CUSTOM_ERROR_MESSAGE =
  "Password must not be longer than 55 characters.";

export const loginSchema = Yup.object().shape(commonAuthSchema);

export const loginValues = {
  email: "",
  password: "",
};
