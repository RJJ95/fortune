import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../assets/icons/arrow-down.svg";

export const Wrapper = styled.div`
  position: relative;
`;

export const SelectArrow = styled(Arrow)`
    position: absolute;
    width: 20px;
    height: 20px;
    top: calc(50% - 10px);
    left: 165px;
    pointer-events: none;
`;
