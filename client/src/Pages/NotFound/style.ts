import styled from '@emotion/styled';

export const S = {
  Container: styled.div<{ theme: any }>`
    padding: 0 12px;
    color: ${(props) => props.theme.palette.primary[100]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 100%;
  `,
  ImageBox: styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
  `,
  Title: styled.div`
    width: 500px;
    font-size: 50px;
    font-weight: bolder;
    text-align: center;
  `,
};
