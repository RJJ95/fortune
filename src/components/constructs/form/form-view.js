import { Wrapper } from "./form-style";
import LabelledInput from "../labelled-input";
import Button from "../../primitives/button";

const Form = ({ inputElements, onSubmit, confirmButtonText }) => {
  return (
    <Wrapper onSubmit={onSubmit}>
      {inputElements.map((inputElement) => (
        <LabelledInput
          id={inputElement.id}
          label={inputElement.label}
          type={inputElement.type}
          value={inputElement.value}
          onChange={inputElement.onChange}
          disabled={inputElement.disabled}
          placeholder={inputElement.placeholder}
        />
      ))}
      <Button kind="primary" type="submit">
        {confirmButtonText}
      </Button>
    </Wrapper>
  );
};

export default Form;
