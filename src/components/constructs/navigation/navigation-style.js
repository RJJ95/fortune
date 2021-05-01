import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Column from "../../primitives/column";

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 7.5vw;
  background-color: ${({ theme }) => theme.colors.white};
  position: sticky;
  top: 0;
`;

export const Items = styled(Column)`
  justify-content: center;
  align-items: center;
`;

export const Item = styled(NavLink)`
  text-decoration: none;
  width: 26px;
  fill: ${({ theme }) => theme.colors.mediumGrey};
  margin-bottom: 35px;
  transition: all 200ms linear;

  :hover {
    fill: ${({ theme }) => theme.colors.black};
  }
`;

export const Logo = styled.img`
  max-width: 300px;
  height: auto;
  padding: 40px 30px 30px;
`;

export const Hr = styled.hr`
  width: 75%;
`;

export const ItemsContainer = styled(Column)`
  padding: 35px;
  justify-content: space-between;
  height: 100%;
`;

export const ConfigurationItem = styled(Item)`
  margin: 0;
`;
