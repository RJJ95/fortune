import styled from "styled-components";
import Column from "../../primitives/column";

export const Wrapper = styled(Column)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 30px;
  border-radius: ${({ theme }) => theme.borderRadius};
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
