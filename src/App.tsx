import FormField from "./components/FormField";
import FormFrame from "./components/FormFrame";
import FormSubmitButton from "./components/FormSubmitButton";

function App() {
  const onSubmit = (formData: any) => {
    alert(JSON.stringify(formData));
    // formData - (email: '....@...com', password: '12312313');
    // ... do something with formData
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "1rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <FormFrame formType="login" onSubmit={onSubmit}>
        <FormField name="email" />
        <FormField name="test" />
        <FormField name="password" type="password" />
        <FormSubmitButton />
      </FormFrame>
    </div>
  );
}

export default App;
