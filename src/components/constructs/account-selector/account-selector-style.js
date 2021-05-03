import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../assets/icons/arrow-down.svg";
import Row from "../../primitives/row";
import Column from "../../primitives/column";
import Card from "../../primitives/card";

export const Wrapper = styled(Column)`
  position: absolute;
  right: 0;
  top: -20px;
  align-items: flex-end;
`;

export const Selector = styled(Row)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 12px 20px;
  width: 150px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  box-shadow: ${(props) => props.show && `0 2px 4px 0 rgba(0, 0, 0, 0.5);`};
`;

export const DropdownArrow = styled(Arrow)`
  width: 20px;
  height: 20px;
`;

export const SelectArea = styled(Column)`
  display: ${(props) => !props.show && `none`};
  ${Card}
  width: 750px;
  max-height: 350px;
  margin-top: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  z-index: 5;
  overflow: scroll;
`;

export const BankSelect = styled(Row)``;
