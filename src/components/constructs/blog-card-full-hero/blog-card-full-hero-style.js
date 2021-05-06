import styled from "styled-components";
import Column from "../../primitives/column";

export const Wrapper = styled(Column)`
  height: ${(props) => props.background ? "300px" : "fit-content"};
  background-image: url(${(props) => props.background});
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${(props) => !props.background && props.theme.colors.white};
`;

export const TextContainer = styled(Column)`
  padding: 30px;
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`;

export const Description = styled.h4`
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`;

export const ReadMore = styled.a`
  cursor: pointer;
  margin-top: 25px;
`;
