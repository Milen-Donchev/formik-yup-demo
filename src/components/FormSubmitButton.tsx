import { useFormikContext } from "formik";

const FormSubmitButton = () => {
  const { handleSubmit } = useFormikContext();

  return (
    <button
      style={{
        marginTop: "0.5rem",
        backgroundColor: "pink",
        borderRadius: "15px",
        padding: "0.5rem",
      }}
      onClick={handleSubmit as any}
    >
      Submit
    </button>
  );
};

export default FormSubmitButton;
