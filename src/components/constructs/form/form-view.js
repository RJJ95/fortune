import { Wrapper } from "./form-style";
import LabelledInput from "../labelled-input";
import LabelledSelect from "../labelled-select";

const Form = ({ inputElements }) => {
  function getComponent(type) {
    switch (type) {
      case "select":
        return LabelledSelect;
      default:
        return LabelledInput;
    }
  }
  return (
    <Wrapper>
      {inputElements.map((inputElement, index) => {
        let Field = getComponent(inputElement.type);
        return (
          <div key={index}>
            <Field
              id={inputElement.id}
              label={inputElement.label}
              type={inputElement.type}
              value={inputElement.value}
              onChange={inputElement.onChange}
              disabled={inputElement.disabled}
              placeholder={inputElement.placeholder}
              options={inputElement.options}
              backgroundColor={inputElement.backgroundColor}
            />
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Form;
