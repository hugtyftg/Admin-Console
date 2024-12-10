import { useGetSalesQuery } from '@/store/api';
import { useTheme } from '@mui/material';
import { S } from './style';
import { Loading } from 'tdesign-react';
import MonthlyChart from './components/MonthlyChart';

export default function Daily() {
  const theme = useTheme();
  const { data, isLoading } = useGetSalesQuery('');

  return (
    <S.Container theme={theme}>
      <S.Title>MONTHLY</S.Title>
      <S.SubTitle>Chart of monthly sales and units</S.SubTitle>

      {!isLoading && data ? (
        <S.Graph theme={theme}>
          <MonthlyChart data={data} />
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
