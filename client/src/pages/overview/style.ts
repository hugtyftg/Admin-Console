import styled from '@emotion/styled';

export const S = {
  Container: styled.div<{ theme: any }>`
    padding: 0 12px;
    .t-input.t-is-readonly,
    .t-input {
      /* background-color: ${(props) => props.theme.palette.primary.main}; */
    }
    .t-input.t-is-readonly,
    .t-select-input {
      color: red;
    }
  `,
  Title: styled.h1`
    margin-bottom: 5px;
  `,
  SubTitle: styled.div`
    font-size: 16px;
    margin-bottom: 15px;
  `,
  Select: styled.div<{ theme: any }>`
    width: 120px;
  `,
  Graph: styled.div<{ theme: any }>`
    margin-top: 40px;
    height: 75vh;
    border: ${(props) => props.theme.palette.secondary[200]};
    border-radius: 4px;
  `,
};

export const OverviewChartS = {
  Container: styled.div<{ theme: any }>`
    height: 100%;
  `,
};
