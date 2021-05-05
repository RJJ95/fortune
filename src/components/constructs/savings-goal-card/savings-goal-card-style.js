import styled from "styled-components";
import Row from "../../primitives/row";
import Column from "../../primitives/column";
import Card from "../../primitives/card";

export const Wrapper = styled(Row)`
  ${Card}
  width: 350px;
`;

export const Container = styled(Column)`
  margin-left: 30px;
  justify-content: center;
`;

export const Title = styled.h2`
  margin: 0;
`;

export const Description = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.colors.mediumGrey};
`;

export const Progress = styled.div`
  margin-top: 15px;
  position: relative;
  width: 100%;
  height: 7.5px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${({ theme }) => theme.borderRadius};

  :after {
    content: "";
    background-color: ${(props) => props.foregroundColor};
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => props.progress}%;
    height: 7.5px;
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;
