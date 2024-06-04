import { css } from '@emotion/react';
export const S = {
  cardCss: (theme: any) => css`
    padding: 1rem;
    border-radius: 0.5rem;
    font-size: 14px;
    line-height: 1.5;
    background-color: ${theme.palette.background.alt};
    h5 {
      height: 27px;
      font-size: 18px;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .t-typography {
      color: ${theme.palette.primary[100]};
    }
    h5.t-typography {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .t-collapse-panel {
      background-color: ${theme.palette.background.alt};
    }
    .t-collapse-panel__wrapper .t-collapse-panel__body {
      color: ${theme.palette.neutral[300]};
      background-color: ${theme.palette.background.alt};
      font-size: 13px;
    }
    .t-collapse-panel__wrapper .t-collapse-panel__header {
      padding: 0;
    }
    .t-collapse-panel__wrapper .t-collapse-panel__content {
      padding: 0;
    }
  `,
};
