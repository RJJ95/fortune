import styled from "styled-components";

export const Difference = styled.div`
  color: ${(props) =>
    props.signum ? props.theme.colors.green : props.theme.colors.red};
`;
