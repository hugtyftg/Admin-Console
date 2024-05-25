import { css } from '@emotion/react';
export const S = {
  cardCss: (theme: any) => css`
    padding: 1rem;
    border-radius: 0.5rem;
    font-size: 14px;
    line-height: 1.5;
    background-color: ${theme.palette.background.alt};
    h5 {
      font-size: 18px;
    }
    .t-collapse-panel__wrapper .t-collapse-panel__body {
      color: ${theme.palette.neutral[300]};
      font-size: 13px;
    }
  `,
};
