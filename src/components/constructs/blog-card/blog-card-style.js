import styled from "styled-components";
import Column from "../../primitives/column";

export const Wrapper = styled(Column)`
  width: 350px;
  height: 450px;
  background-image: url(${(props) => props.background});
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const HeroImage = styled.img`
  width: 100%;
  height: auto;
`;

export const TextContainer = styled(Column)`
  padding: 30px;
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 5px;
`;

export const Description = styled.h4`
  margin: 0;
`;
