import styled from '@emotion/styled';
import { useTheme } from '@mui/material';
import React from 'react';
import { CallIcon } from 'tdesign-icons-react';

const S = {
  Container: styled.div<{ theme: any }>`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: ${(props) => props.theme.palette.background.alt};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
  `,
  Top: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Middle: styled.div``,
  Bottom: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};

type CardProps = {
  title?: string;
  icon?: React.ReactNode;
  number?: number;
  percentage?: string;
};
function Card({
  title = 'Total Customers',
  icon = <CallIcon />,
  number = 5251,
  percentage = '+5%',
}: CardProps) {
  const theme = useTheme();
  return (
    <S.Container theme={theme}>
      <S.Top>
        <div>{title}</div>
        <div>{icon}</div>
      </S.Top>
      <S.Middle>{number}</S.Middle>
      <S.Bottom>
        <div>{percentage}</div>
        <div>Since last month</div>
      </S.Bottom>
    </S.Container>
  );
}
export default Card;
