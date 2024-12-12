import { useGetSalesQuery } from '@/store/api';
import { useTheme } from '@mui/material';
import { S } from './style';
import { Loading } from 'tdesign-react';
import BreakdownChart from './BreakdownChart';

export default function Breakdown() {
  const theme = useTheme();
  const { data, isLoading } = useGetSalesQuery('');

  return (
    <S.Container theme={theme}>
      <S.Title>BREAKDOWN</S.Title>
      <S.SubTitle>Chart of sales category distribution</S.SubTitle>
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
