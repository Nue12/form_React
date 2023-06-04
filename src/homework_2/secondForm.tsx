import { useState } from "react";
import formDataDemo from "../../data.json";
import { DynamicForm } from "../components/DynamicForm";
import { secondFormType } from "../typings/secondFormType";

const defaultFormData = {
  Name: "",
  Gender: "",
  City: "",
  Phone_Number: "",
  Note: "",
};

export const SecondForm = () => {
  const [formData, setFormData] = useState<secondFormType>(defaultFormData);

  const handleSubmit = () => {
    if (
      formData.Name.length <= 0 ||
      formData.Gender.length <= 0 ||
      formData.City.length <= 0 ||
      !formData.Phone_Number
    ) {
      alert("fill all the requirment");
    } else {
      console.log("submit form-2");
    }
  };
  console.log("second form: ", formData);
  return (
    <>
      <h1>Second Form</h1>
      {formDataDemo.map((form) => (
        <div className="formInput" key={form.formName}>
          <DynamicForm
            formDemo={form}
            setFormData={setFormData}
            formData={formData}
            handleSubmit={handleSubmit}
          />
        </div>
      ))}
    </>
  );
};
