import styled from "styled-components";
import { ResponsiveContainer } from "recharts";

export const Wrapper = styled(ResponsiveContainer)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
