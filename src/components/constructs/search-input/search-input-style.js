import styled from "styled-components";
import { ReactComponent as Search } from "../../../assets/icons/search.svg";

export const Wrapper = styled.div`
    position: relative;
`;

export const SearchIcon = styled(Search)`
    position: absolute;
    width: 24px;
    top: calc(50% - 12px);
    left: 15px;
`;

export const Input = styled.input`
  padding-left: 50px;
`;