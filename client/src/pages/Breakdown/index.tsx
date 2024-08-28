import { useGetSalesQuery } from '@/store/api';
import { useTheme } from '@mui/material';
import { S } from './style';
import { Loading } from 'tdesign-react';
import BreakdownChart from './BreakdownChart';

export default function Daily() {
  const theme = useTheme();
  const { data, isLoading } = useGetSalesQuery('');

  return (
    <S.Container theme={theme}>
      <S.Title>DAILY</S.Title>
      <S.SubTitle>Chart of daily sales and units</S.SubTitle>
      {!isLoading && data ? (
        <S.Graph theme={theme}>
          <BreakdownChart data={data} />
        </S.Graph>
      ) : (
        <Loading
          text="Loading..."
          indicator
          loading
          preventScrollThrough
          showOverlay
        />
      )}
    </S.Container>
  );
}
