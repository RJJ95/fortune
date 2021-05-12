import { Wrapper, SelectArrow, SelectContainer } from "./select-style";

const Select = ({ value, onChange, options, backgroundColor }) => (
  <Wrapper>
    <SelectArrow />
    <SelectContainer
      backgroundColor={backgroundColor}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.name}
        </option>
      ))}
    </SelectContainer>
  </Wrapper>
);

export default Select;
