import styled from "styled-components";

export const Primary = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Secondary = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Tertiary = styled.button`
  background-color: ${({ theme }) => theme.colors.tertiary};
`;
