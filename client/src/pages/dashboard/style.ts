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
  Main: styled.div`
    background-color: #fff;
    height: 75vh;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  `,
  Top: styled.div`
    flex: 2;
    display: flex;
    justify-content: space-between;
    column-gap: 10px;
  `,
  TopCards: styled.div`
    flex: 1;
    border: 1px solid #000;
  `,
  TopLineChart: styled.div`
    flex: 2;
    border: 1px solid #000;
  `,
  Bottom: styled.div`
    flex: 3;
    display: flex;
    justify-content: space-between;
    column-gap: 10px;
  `,
  BottomTable: styled.div`
    flex: 2;
    border: 1px solid #000;
  `,
  BottomPieChart: styled.div`
    flex: 1;
    border: 1px solid #000;
  `,
};
