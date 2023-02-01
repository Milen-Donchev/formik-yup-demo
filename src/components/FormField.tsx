import { useFormikContext } from "formik";

interface FormFieldProps {
  name: string;
  type?: string;
}

const FormField = (props: FormFieldProps) => {
  const { name, type } = props;

  const { values, errors, touched, handleChange, handleBlur } =
    useFormikContext<any>();

  const isInvalid = !!touched[name] && !!errors[name];

  return (
    <>
      <input
        name={name}
        value={values[name]}
        onChange={handleChange(name)}
        onBlur={handleBlur(name)}
        type={type ?? "text"}
        placeholder={name.toUpperCase()}
        style={{ margin: "0.5rem 0", padding: "0.5rem" }}
      />
      {isInvalid && (
        <span style={{ color: "red" }}>{errors[name] as string}</span>
      )}
    </>
  );
};

export default FormField;
