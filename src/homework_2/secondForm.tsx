import { useState } from "react";
import backendForm from "../../data.json";
import { DynamicForm } from "../components/DynamicForm";
import { Form } from "../typings/secondFormType";
import { normalizePhNoInput } from "../utils/NormalizeInput";

export const SecondForm = () => {
  const [formData, setFormData] = useState<Form[]>(backendForm);

  const handleSubmit = () => {
    console.log("second Form: ", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    index: number
  ) => {
    const newArr = [...formData];
    if (newArr[index].type === "tel") {
      const normalizedInput = normalizePhNoInput(
        e.target.value,
        newArr[index].value
      );
      newArr[index].value = normalizedInput;
    } else {
      newArr[index].value = e.target.value;
    }
    setFormData(newArr);
  };

  return (
    <>
      <h1>Second Form</h1>
      {formData.map((form, index) => (
        <div
          style={{ display: `${form.isHidden ? "none" : "block"}` }}
          className="formControl"
          key={form.formName}
          onClick={form.type === "submit" ? handleSubmit : undefined}
        >
          <DynamicForm form={form} handleChange={handleChange} index={index} />
        </div>
      ))}
    </>
  );
};
