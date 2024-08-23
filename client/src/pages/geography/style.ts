import styled from '@emotion/styled';

export const S = {
  Container: styled.div<{ theme: any }>`
    padding: 0 12px;
  `,
  Title: styled.h1`
    margin-bottom: 10px;
  `,
  Subtitle: styled.h3``,
  Graph: styled.div<{ theme: any }>`
    margin-top: 40px;
    height: 75vh;
    border: ${(props) => props.theme.palette.secondary[200]};
    border-radius: 4px;
  `,
};
