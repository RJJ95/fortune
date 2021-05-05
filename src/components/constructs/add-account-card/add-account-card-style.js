import styled from "styled-components";
import { ReactComponent as Plus } from "../../../assets/icons/plus.svg";
import Card from "../../primitives/card";
import Row from "../../primitives/row";

export const Add = styled(Plus)`
  width: 40px;
  fill: ${({ theme }) => theme.colors.mediumGrey};
  transition: all 200ms linear;
`;

export const Wrapper = styled(Row)`
  ${Card}
  min-width: 175px;
  max-width: 175px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    ${Add} {
      fill: ${({ theme }) => theme.colors.black};
    }
  }
`;
