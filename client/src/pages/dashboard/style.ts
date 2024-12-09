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
    height: 85vh;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  `,
  Top: styled.div`
    /* 解决flex-item被内容撑开的问题 */
    height: 0;
    flex: 4;
    display: flex;
    justify-content: space-between;
    column-gap: 10px;
  `,
  TopCards: styled.div`
    flex: 2;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  `,
  TopLineChart: styled.div<{ theme: any }>`
    flex: 3;
    background: ${(props) => props.theme.palette.background.alt};
    border-radius: 5px;
  `,
  Bottom: styled.div`
    /* 解决flex-item被内容撑开的问题 */
    height: 0;
    flex: 5;
    display: flex;
    justify-content: space-between;
    column-gap: 10px;
  `,
  BottomTable: styled.div<{ theme: any }>`
    flex: 2;
    border-radius: 5px;
    background: ${(props) => props.theme.palette.background.alt};
  `,
  BottomPieChart: styled.div<{ theme: any }>`
    flex: 1;
    border-radius: 5px;
    background: ${(props) => props.theme.palette.background.alt};
  `,
};
