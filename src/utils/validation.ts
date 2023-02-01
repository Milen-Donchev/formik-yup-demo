import { loginSchema, loginValues } from "./validation/login";
import { registerSchema, registerValues } from "./validation/register";

export type FormType = "login" | "register";

export const getSchema = (formType: FormType) => {
  switch (formType) {
    case "login":
      return loginSchema;
    case "register":
      return registerSchema;
  }
};

export const getValues = (formType: FormType) => {
  switch (formType) {
    case "login":
      return loginValues;
    case "register":
      return registerValues;
  }
};
