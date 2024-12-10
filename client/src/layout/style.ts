import styled from '@emotion/styled';
const S = {
  LayoutContainer: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
  `,
  MainContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: scroll;
  `,
  NavContainer: styled.div`
    padding: 0.5rem;
  `,
  ContentContainer: styled.div`
    flex: 1;
    padding: 0.5rem;
  `,
};

export default S;
