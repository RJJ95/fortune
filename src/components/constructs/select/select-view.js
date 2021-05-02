import { Wrapper, SelectArrow } from "./select-style";

const Select = ({ value, onChange, options }) => (
  <Wrapper>
    <SelectArrow />
    <select value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  </Wrapper>
);

export default Select;
