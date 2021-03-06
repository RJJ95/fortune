import { Wrapper, Container, SelectContainer } from "./filters-style";
import SearchInput from "../../../search-input";
import Select from "../../../select";

const Filters = ({
  searchValue,
  handleSearch,
  statusValue,
  handleStatusFilter,
  categoryValue,
  handleCategoryFilter,
  statusOptions,
  categoryOptions,
  sortOptions,
  sortValue,
  handleSortFilter,
}) => {
  return (
    <Wrapper>
      <Container>
        <SearchInput value={searchValue} onChange={handleSearch} />
        <SelectContainer>
          <Select
            options={statusOptions}
            value={statusValue}
            onChange={handleStatusFilter}
          />
        </SelectContainer>
        <SelectContainer>
          <Select
            options={categoryOptions}
            value={categoryValue}
            onChange={handleCategoryFilter}
          />
        </SelectContainer>
      </Container>
      <SelectContainer>
        <Select
          options={sortOptions}
          value={sortValue}
          onChange={handleSortFilter}
        />
      </SelectContainer>
    </Wrapper>
  );
};

export default Filters;
