import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Column from "../../primitives/column";

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex: 0 0 fit-content;
  background-color: ${({ theme }) => theme.colors.white};
  position: sticky;
  top: 0;
`;

export const Tooltip = styled.span`
  top: calc(50% - 20px);
  left: 40px;
  position: absolute;
  width: fit-content;
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.black};
  color: white;
  opacity: 0;
  pointer-events: none;
  transition: all 200ms linear;
  height: 20px;
`;

export const ItemContainer = styled.div`
  position: relative;
  margin-bottom: 35px;
  height: fit-content;
  width: 26px;

  &:hover ${Tooltip} {
    opacity: 1;
  }
`;

export const Items = styled(Column)`
  justify-content: center;
  align-items: center;
`;

export const Item = styled(NavLink)`
  text-decoration: none;
  fill: ${({ theme }) => theme.colors.mediumGrey};
  transition: all 200ms linear;
  position: relative;

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
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

export const ItemsContainer = styled(Column)`
  padding: 35px;
  justify-content: space-between;
  height: 100%;
`;

export const ConfigurationItemContainer = styled(ItemContainer)`
  margin: 0;
`;

export const ConfigurationItem = styled(Item)`
  margin: 0;
`;
