import { css } from '@emotion/react';
import styled from '@emotion/styled';

const S = {
  SectionContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  InputWrapper: styled.div<{ backgroundColor: string }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.1rem 0.5rem 0.1rem 1.5rem;
    border-radius: 9px;
    margin-left: 1.5rem;
    background-color: ${(props) => props.backgroundColor};
  `,

  toolbarCss: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
};

export default S;
