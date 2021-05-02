const Select = ({ value, onChange, options }) => {
  return (
    <select value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
