import { Wrapper } from "./labelled-select-style";
import Select from "../select";

const LabelledSelect = ({
  value,
  onChange,
  options,
  label,
  backgroundColor,
}) => (
  <Wrapper>
    <label>{label}</label>
    <Select
      backgroundColor={backgroundColor}
      value={value}
      onChange={onChange}
      options={options}
    />
  </Wrapper>
);

export default LabelledSelect;
