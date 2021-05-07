import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../assets/icons/arrow-down.svg";
import { ReactComponent as Close } from "../../../assets/icons/close.svg";
import Row from "../../primitives/row";
import Column from "../../primitives/column";
import Card from "../../primitives/card";

export const Wrapper = styled(Column)`
  position: absolute;
  right: 20px;
  top: 20px;
  align-items: flex-end;
  svg {
    max-width: 100px;
    max-height: 30px;
  }
`;

export const Selector = styled(Row)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 12px 20px;
  width: 150px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  box-shadow: ${(props) => props.show && `0 2px 4px 0 rgba(0, 0, 0, 0.5)`};
`;

export const DropdownArrow = styled(Arrow)`
  width: 20px;
  height: 20px;
`;

export const CloseIcon = styled(Close)`
  width: 20px;
  height: 20px;
`;

export const SelectArea = styled(Column)`
  ${Card}
  width: 750px;
  max-height: 350px;
  margin-top: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  z-index: 10;
  overflow: scroll;
`;

export const BankSelect = styled(Row)`
  svg {
    height: 25px;
    width: auto;
    margin-right: 20px;
    cursor: pointer;
  }
`;

export const LogoContainer = styled.div`
  path {
    fill: ${(props) => !props.active && props.theme.colors.mediumGrey};
  }
`;

export const Overlay = styled.div`
  position: fixed;
  background-color: black;
  opacity: 0.1;
  width: 150vw;
  height: 100vh;
  z-index: 6;
  top: 0;
`;
