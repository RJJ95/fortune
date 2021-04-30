import styled from "styled-components";
import Column from "../../primitives/column";
import Card from "../../primitives/card"

export const Wrapper = styled(Column)`
  ${Card}
  width: 210px;
`;

export const LogoContainer = styled.div`
  max-width: 100px;
  height: auto;
`;

export const AccountNumber = styled.h4`
  margin-top: 5px;
  margin-bottom: 0;
  font-weight: 100;
`;

export const Balance = styled.h1`
  margin: 20px 0;
`;

export const Difference = styled.h2`
  color: ${(props) =>
    props.signum ? props.theme.colors.green : props.theme.colors.red};
  margin: 0;
  font-weight: 100;
`;
