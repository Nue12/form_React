import { Form } from "../typings/secondFormType";

type Props = {
  form: Form;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    index: number
  ) => void;
  index: number;
};

const Input = ({ form, handleChange, index }: Props) => {
  if (form.type === "radio") {
    return (
      <>
        <label>{form.formName}</label>
        {form.options.map((option) => (
          <div key={option.title}>
            <input
              type={form.type}
              name={form.formName}
              placeholder={form.placeholder}
              value={option.value}
              required={form.isRequired}
              checked={form.value === option.value}
              onChange={(e) => handleChange(e, index)}
            />
            <span>{option.title}</span>
          </div>
        ))}
      </>
    );
  } else {
    return (
      <>
        {form.type !== "submit" && <label>{form.formName}</label>}
        <input
          type={form.type}
          placeholder={form.placeholder}
          name={form.formName}
          required={form.isRequired}
          title={form.formName}
          value={form.value}
          onChange={(e) => handleChange(e, index)}
          onBlur={
            form.isAction ? () => console.log(form.callbackUrl) : undefined
          }
        />
      </>
    );
  }
};

const TextArea = ({ form, handleChange, index }: Props) => {
  return (
    <>
      <label>{form.formName}</label>
      <textarea
        placeholder={form.placeholder}
        value={form.value}
        required={form.isRequired}
        name={form.formName}
        title={form.formName}
        onChange={(e) => handleChange(e, index)}
        onBlur={form.isAction ? () => console.log(form.callbackUrl) : undefined}
      />
    </>
  );
};

const SelectBox = ({ form, handleChange, index }: Props) => {
  return (
    <select
      value={form.value}
      required={form.isRequired}
      onChange={(e) => handleChange(e, index)}
      onBlur={form.isAction ? () => console.log(form.callbackUrl) : undefined}
    >
      <option value="" disabled>
        {form.placeholder}
      </option>
      {form.options.map((option) => (
        <option key={option.title} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
};

export const DynamicForm = ({ form, handleChange, index }: Props) => {
  switch (form.type) {
    case "selectbox":
      return (
        <SelectBox form={form} handleChange={handleChange} index={index} />
      );
    case "textarea":
      return <TextArea form={form} handleChange={handleChange} index={index} />;
    default:
      return <Input form={form} handleChange={handleChange} index={index} />;
  }
};
