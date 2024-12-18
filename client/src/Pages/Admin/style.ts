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
};
