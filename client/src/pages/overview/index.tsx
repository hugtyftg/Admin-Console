import OverviewChart from '@/components/OverviewChart';
import { S } from './style';
import { useTheme } from '@mui/material';
import { VIEW } from '@/components/OverviewChart/types';
export default function Overview() {
  const theme = useTheme();

  return (
    <S.Container theme={theme}>
      <S.Title>OVERVIEW</S.Title>
      <S.Graph theme={theme}>
        <OverviewChart isDashboard={true} view={VIEW.SALES} />
      </S.Graph>
    </S.Container>
  );
}
