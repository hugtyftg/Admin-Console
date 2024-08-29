import { useTheme } from '@mui/material';
import { S } from './style';

// type DashboardPropType = {};
export default function Dashboard() {
  const theme = useTheme();
  return (
    <S.Container theme={theme}>
      <S.Title>DASHBOARD</S.Title>
      <S.SubTitle>Welcome to your data dashboard</S.SubTitle>
      <S.Main>
        <S.Top>
          <S.TopCards></S.TopCards>
          <S.TopLineChart></S.TopLineChart>
        </S.Top>
        <S.Bottom>
          <S.BottomTable></S.BottomTable>
          <S.BottomPieChart></S.BottomPieChart>
        </S.Bottom>
      </S.Main>
    </S.Container>
  );
}
