import { Wrapper, SearchIcon, Input } from "./search-input-style";

const SearchInput = ({ value, onChange }) => {
  return (
    <Wrapper>
      <SearchIcon />
      <Input placeholder="Search" value={value} onChange={onChange} />
    </Wrapper>
  );
};

export default SearchInput;
