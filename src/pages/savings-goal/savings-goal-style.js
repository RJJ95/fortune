import styled from "styled-components";
import Row from "../../components/primitives/row";

export const Wrapper = styled.div``;

export const ChartsContainer = styled.div``;

export const DataContainer = styled(Row)`
    > div:not(:last-child) {
        margin-right: 40px;
    }
`;
