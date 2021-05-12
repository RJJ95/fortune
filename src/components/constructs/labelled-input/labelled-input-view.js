import { Wrapper, Input } from "./labelled-input-style";

const LabelledInput = ({
  id,
  label,
  type,
  value,
  onChange,
  disabled,
  placeholder,
  backgroundColor,
}) => {
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <Input
        backgroundColor={backgroundColor}
        type={type}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default LabelledInput;
