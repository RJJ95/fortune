import styled from "styled-components";
import Row from "../../primitives/row";
import Column from "../../primitives/column";

export const Wrapper = styled(Column)`
  position: relative;
`;

export const MenuItems = styled(Row)`
  > h4:not(:last-child) {
    margin-right: 40px;
  }
`;

export const Item = styled.h4`
  cursor: pointer;
  color: ${(props) =>
    props.active ? props.theme.colors.black : props.theme.colors.mediumGrey};
  transition: all 200ms linear;

  :hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Hr = styled.hr`
  width: calc(100% + 80px);
  position: absolute;
  bottom: -5px;
  left: -40px;
  border-top: 1px solid ${({ theme }) => theme.colors.mediumGrey};
  z-index: 1;
`;
