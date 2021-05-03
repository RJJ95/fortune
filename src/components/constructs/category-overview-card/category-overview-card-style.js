import styled from "styled-components";
import Card from "../../primitives/card";
import Column from "../../primitives/column";

export const Wrapper = styled(Column)`
  ${Card}
  width: 210px;
  align-items: center;
  justify-content: space-between;
`;

export const IconContainer = styled(Column)`
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 50px;
  width: 90px;
  height: 90px;

  svg {
    fill: ${(props) => props.fill};
    width: 45px;
    height: 45px;
  }
`;

export const Category = styled.h2`
  margin: 30px 0 0;
`;

export const Description = styled.h4`
  color: ${({ theme }) => theme.colors.mediumGrey};
  font-weight: 100;
  margin: 5px 0 20px;
`;

export const Expenditure = styled.h1`
  margin: 0;
`;

export const UpperSection = styled(Column)`
  align-items: center;
  justify-content: center;
`;