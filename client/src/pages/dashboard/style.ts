import styled from '@emotion/styled';

export const S = {
  Container: styled.div<{ theme: any }>`
    padding: 0 12px;
    .customers {
      color: red;
    }
    color: ${(props) => props.theme.palette.primary[100]};
    .t-table,
    .t-pagination,
    .t-input.t-is-readonly,
    .t-pagination__number,
    .t-pagination__jump,
    .t-input,
    .t-table th,
    .t-table td {
      background: ${(props) => props.theme.palette.background.alt};
      color: ${(props) => props.theme.palette.secondary[100]} !important;
      white-space: nowrap;
    }
    .t-input__inner,
    .t-pagination .t-input-adornment__append {
      color: ${(props) => props.theme.palette.secondary[100]} !important;
    }
  `,
  Title: styled.h1`
    margin-bottom: 5px;
  `,
  SubTitle: styled.div`
    font-size: 16px;
    margin-bottom: 15px;
  `,
  Main: styled.div<{ isNonMobile: boolean }>`
    height: 85vh;
    grid-template-columns: 1fr 1fr 1fr;
    display: grid;
    grid-gap: 10px;
    > div {
      grid-column: ${(props) => (props.isNonMobile ? undefined : '1 / span4')};
    }
  `,
  TopCards: styled.div`
    min-height: 0;
    min-width: 0;
    grid-row: 1;
    grid-column: 1;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  `,
  TopLineChart: styled.div<{ theme: any; isNonMobile: boolean }>`
    min-height: 0;
    min-width: 0;
    grid-row: ${(props) => (props.isNonMobile ? 1 : 2)};
    grid-column: 2 / span 3;

    background: ${(props) => props.theme.palette.background.alt};
    border-radius: 5px;
  `,
  BottomTable: styled.div<{ theme: any; isNonMobile: boolean }>`
    min-height: 0;
    min-width: 0;
    grid-row: ${(props) => (props.isNonMobile ? 2 : 3)};
    grid-column: 1 / span 2;
    overflow: auto;
    border-radius: 5px;
    background: ${(props) => props.theme.palette.background.alt};
    padding: 15px;
  `,
  BottomPieChart: styled.div<{ theme: any; isNonMobile: boolean }>`
    min-height: 0;
    min-width: 0;
    grid-row: ${(props) => (props.isNonMobile ? 2 : 4)};
    grid-column: 3;
    border-radius: 5px;
    background: ${(props) => props.theme.palette.background.alt};
  `,
};
