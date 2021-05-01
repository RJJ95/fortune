import styled from "styled-components";

export const Body = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 25px 40px 40px;
  width: calc(92.5vw - 80px);
`;
