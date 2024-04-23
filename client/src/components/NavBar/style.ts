import { css } from '@emotion/react';
import styled from '@emotion/styled';

const S = {
  LeftContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 0.5rem;
  `,
  RightContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 0.5rem;
  `,
  InputWrapper: styled.div<{ backgroundColor: string }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.1rem 0.5rem 0.1rem 1rem;
    border-radius: 9px;
    background-color: ${(props) => props.backgroundColor};
  `,

  toolbarCss: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
};

export default S;
