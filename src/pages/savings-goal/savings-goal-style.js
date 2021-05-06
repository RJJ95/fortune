import styled from "styled-components";
import Row from "../../components/primitives/row";
import Card from "../../components/primitives/card";

export const Wrapper = styled.div``;

export const ChartsContainer = styled.div`
  width: 65%;
  margin-right: 40px;
  position: sticky;
  top: 0;
`;

export const DataContainer = styled(Row)``;

export const AreaChartContainer = styled.div`
  ${Card}
  margin-top: 40px;
  height: 500px;
`;

export const SavingsGoalCardContainer = styled.div`
  margin-right: 40px;
`;

export const ResultCardContainer = styled.div``;

export const BodyContainer = styled(Row)``;
