import { Wrapper, Container } from "./filters-style";
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
        <Select
          options={statusOptions}
          value={statusValue}
          onChange={handleStatusFilter}
        />
        <Select
          options={categoryOptions}
          value={categoryValue}
          onChange={handleCategoryFilter}
        />
      </Container>
      <Select
        options={sortOptions}
        value={sortValue}
        onChange={handleSortFilter}
      />
    </Wrapper>
  );
};

export default Filters;
