import styled from "styled-components";
import { ReactComponent as Plus } from "../../../assets/icons/plus.svg";
import Card from "../../primitives/card";
import Row from "../../primitives/row";

export const Wrapper = styled(Row)`
  ${Card}
  width: 210px;
  align-items: center;
  justify-content: center;
`;

export const Add = styled(Plus)`
  width: 40px;
  fill: ${({ theme }) => theme.colors.mediumGrey};
  cursor: pointer;
  transition: all 200ms linear;
  
  :hover {
    fill: ${({ theme }) => theme.colors.black};
  }
`;
