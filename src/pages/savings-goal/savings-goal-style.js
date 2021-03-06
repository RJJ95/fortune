import styled from "styled-components";
import Row from "../../components/primitives/row";
import Card from "../../components/primitives/card";

export const Wrapper = styled.div``;

export const ChartsContainer = styled.div`
  width: 100%;
  margin-right: 40px;
`;

export const BlogContainer = styled.div`
`;

export const DataContainer = styled(Row)``;

export const AreaChartContainer = styled.div`
  ${Card}
  margin-top: 40px;
  height: 500px;
`;

export const SavingsGoalCardContainer = styled.div`
  margin-right: 40px;
  flex: 1 1 50%;
`;

export const ResultCardContainer = styled.div`
  flex: 1 1 30%;
  margin-right: 40px;
`;

export const BodyContainer = styled(Row)``;

export const AmountToGoContainer = styled.div`
  flex: 1 1 fit-content;
`;
