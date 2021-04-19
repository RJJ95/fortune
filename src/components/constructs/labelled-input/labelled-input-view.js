import { Wrapper } from "./labelled-input-style";

const LabelledInput = ({
  id,
  label,
  type,
  value,
  onChange,
  disabled,
  placeholder,
}) => {
  return (
    <Wrapper>
      <label for={id}>{label}</label>
      <input
        type={type}
        name={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default LabelledInput;
