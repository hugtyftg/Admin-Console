import styled from '@emotion/styled';

const S = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
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
};

export default S;
