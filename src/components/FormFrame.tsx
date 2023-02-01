import type { ReactNode } from "react";

import { Formik } from "formik";

import { getSchema, getValues, type FormType } from "../utils/validation";

interface FormFrameProps {
  children: ReactNode;
  formType: FormType;
  onSubmit: (...args: any) => any;
}

const FormFrame = (props: FormFrameProps) => {
  const { formType, onSubmit, children } = props;

  const schema = getSchema(formType);
  const values = getValues(formType);

  return (
    <Formik
      initialValues={values}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {() => children}
    </Formik>
  );
};

export default FormFrame;
