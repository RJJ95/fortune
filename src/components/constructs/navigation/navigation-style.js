import styled from "styled-components";
import { Link } from "react-router-dom";
import Row from "../../primitives/row";

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px lightgray solid;
`;

export const Items = styled(Row)``;

export const Item = styled(Link)`
    margin-left: 20px;
    text-decoration: none;
`;

export const Logo = styled.img`
  max-width: 300px;
  height: auto;
`;
