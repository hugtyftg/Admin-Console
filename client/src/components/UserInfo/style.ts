import styled from '@emotion/styled';

const S = {
  UserInfoWrapper: styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 15px;
  `,
  TextWrapper: styled.div`
    width: 70px;
    > div {
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  `,
  UserName: styled.div<{ theme: any }>`
    color: ${(props) => props.theme.palette.secondary[100]};
    font-size: 0.85rem;
    font-weight: bold;
  `,
  UserOccupation: styled.div<{ theme: any }>`
    color: ${(props) => props.theme.palette.secondary[200]};
    font-size: 0.75rem;
  `,
};
export default S;
