import styled from '@emotion/styled';

export const S = {
  Container: styled.div`
    padding: 0 1.5rem 0;
  `,
  HeaderWrapper: styled.div`
    margin-bottom: 1.5rem;
  `,
  Content: styled.div<{ isNonMobile: boolean }>`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    > div {
      grid-column: ${(props) => (props.isNonMobile ? undefined : '1 / 4')};
    }
    grid-row-gap: 20px;
    grid-column-gap: 1.33%;
  `,
};
