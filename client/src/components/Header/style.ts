import styled from '@emotion/styled';

export const S = {
  HeaderWrapper: styled.div``,
  TitleWrapper: styled.h2<{ theme: any }>`
    color: ${(props) => props.theme.palette.primary[100]};
    margin-bottom: 5px;
    font-weight: bold;
  `,
  SubtitleWrapper: styled.h5<{ theme: any }>`
    color: ${(props) => props.theme.palette.primary[300]};
  `,
};
