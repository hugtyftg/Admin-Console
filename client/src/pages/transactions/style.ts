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
      color: ${(props) => props.theme.palette.secondary[100]};
      white-space: nowrap;
    }
    .t-input__inner,
    .t-pagination .t-input-adornment__append {
      color: ${(props) => props.theme.palette.secondary[100]};
    }
    .t-table__empty {
      color: ${(props) => props.theme.palette.secondary[100]};
    }
  `,
  Title: styled.h1`
    margin-bottom: 10px;
  `,
};
