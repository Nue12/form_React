import { secondFormType } from "../typings/secondFormType";
import { FormDemo } from "../typings/secondFormType";
import { normalizePhNoInput } from "../utils/NormalizeInput";

type Props = {
  formDemo: FormDemo;
  setFormData: React.Dispatch<React.SetStateAction<secondFormType>>;
  formData: secondFormType;
  handleSubmit: () => void;
};

export const DynamicForm = ({
  formDemo,
  formData,
  setFormData,
  handleSubmit,
}: Props) => {
  if (formDemo.type === "input") {
    return (
      <>
        <label>{formDemo.formName}</label>
        <input
          type={formDemo.type}
          placeholder={formDemo.placeholder}
          required={formDemo.isRequired}
          onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
        />
      </>
    );
  }
  if (formDemo.type === "radio") {
    return (
      <>
        <label>{formDemo.formName}</label>
        {formDemo.options.map((option) => (
          <div key={option.title} className="radioDiv">
            <input
              type="radio"
              value={option.value}
              required={formDemo.isRequired}
              checked={formData.Gender === option.value}
              onChange={(e) =>
                setFormData({ ...formData, Gender: e.target.value })
              }
            />
            {option.title}
          </div>
        ))}
      </>
    );
  }
  if (formDemo.type === "selectbox") {
    return (
      <>
        <label>{formDemo.formName}</label>
        <select
          value={formData.City}
          required={formDemo.isRequired}
          onChange={(e) => setFormData({ ...formData, City: e.target.value })}
        >
          <option value={""} disabled>
            City
          </option>
          {formDemo.options.map((option) => (
            <option key={option.title} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
      </>
    );
  }
  if (formDemo.type === "phoneinput") {
    return (
      <>
        <label>{formDemo.formName}</label>
        <input
          onBlur={() => console.log("check ph no ")}
          type="tel"
          value={formData.Phone_Number}
          placeholder="phone no"
          required={formDemo.isRequired}
          onChange={(e) => {
            const phNo = normalizePhNoInput(
              e.target.value,
              formData.Phone_Number
            );
            setFormData({ ...formData, Phone_Number: phNo });
          }}
        />
      </>
    );
  }
  if (formDemo.type === "textarea") {
    return (
      <>
        <label>{formDemo.formName}</label>
        <textarea
          placeholder={formDemo.placeholder}
          onChange={(e) => setFormData({ ...formData, Note: e.target.value })}
        />
        ;
      </>
    );
  }
  if (formDemo.type === "submit") {
    return (
      <>
        <button onClick={handleSubmit}>{formDemo.formName}</button>
      </>
    );
  }
};
