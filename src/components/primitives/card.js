import { css } from "styled-components";

const Card = css`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 30px;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export default Card;
