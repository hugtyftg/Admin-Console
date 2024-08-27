import { useGetSalesQuery } from '@/store/api';
import { useTheme } from '@mui/material';
import { S } from './style';
import { DateRangePicker, Loading } from 'tdesign-react';
import DailyChart from './components/DailyChart';
import { useMemo, useState } from 'react';

export default function Daily() {
  const theme = useTheme();
  const { data, isLoading } = useGetSalesQuery('');
  const [startDate, setStartDate] = useState('2021-05-21');
  const [endDate, setEndDate] = useState('2021-05-31');

  // 禁用不存在的日期数据
  const [disableBefore, disableAfter] = useMemo(() => {
    if (!data) {
      return [];
    }
    return [
      data.dailyData[0].date,
      data.dailyData[data.dailyData.length - 1].date,
    ];
  }, [data]);

  const changeRange = (newV: any[]) => {
    setStartDate(newV[0]);
    setEndDate(newV[1]);
  };
  const range = useMemo(() => {
    return [startDate, endDate];
  }, [startDate, endDate]);

  return (
    <S.Container theme={theme}>
      <S.Title>DAILY</S.Title>
      <S.SubTitle>Chart of daily sales</S.SubTitle>
      <DateRangePicker
        value={range}
        onChange={changeRange}
        disableDate={{
          before: disableBefore,
          after: disableAfter,
        }}
      />
      {!isLoading && data ? (
        <S.Graph theme={theme}>
          <DailyChart data={data} startDate={startDate} endDate={endDate} />
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
