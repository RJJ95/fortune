import styled from "styled-components";
import { Link } from "react-router-dom";
import Column from "../../primitives/column";

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Items = styled(Column)`
  justify-content: center;
  align-items: center;
  padding: 35px;
`;

export const Item = styled(Link)`
  text-decoration: none;
`;

export const Logo = styled.img`
  max-width: 300px;
  height: auto;
  padding: 40px 30px 30px;
`;

export const Hr = styled.hr`
  width: 75%;
`;
