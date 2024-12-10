import { useMediaQuery, useTheme } from '@mui/material';
import { S } from './style';
import Card from './components/Card';
import {
  DashboardIcon,
  CallIcon,
  PinIcon,
  MapConnectionIcon,
} from 'tdesign-icons-react';
import { OverviewChart, VIEW } from '../Overview/components/index.ts';
import BreakdownChart from '../Breakdown/BreakdownChart';
import { useGetDashboardQuery } from '@/store/api';
import { Loading } from 'tdesign-react';
import { useMemo } from 'react';
// import Transactions from '../Transactions/index.tsx';
import Transactions from '@/pages/Transactions';

export default function Dashboard() {
  const theme = useTheme();

  const { data, isLoading } = useGetDashboardQuery('');
  const isNonMobile = useMediaQuery('(min-width: 1000px)');
  const cardData = useMemo(() => {
    return [
      {
        title: 'Total Customers',
        icon: <DashboardIcon />,
        number: isLoading ? '' : data.totalCustomers,
        percentage: '+5%',
      },
      {
        title: 'Sales Today',
        icon: <CallIcon />,
        number: isLoading ? '' : data.curDateStat.totalSales,
        percentage: '+5%',
      },
      {
        title: 'Monthly Sales',
        icon: <PinIcon />,
        number: isLoading ? '' : data.curMonthStat.totalSales,
        percentage: '+5%',
      },
      {
        title: 'Yearly Sales',
        icon: <MapConnectionIcon />,
        number: isLoading ? '' : data.yearlySalesTotal,
        percentage: '+5%',
      },
    ];
  }, [data, isLoading]);
  return (
    <S.Container theme={theme}>
      <S.Title>DASHBOARD</S.Title>
      <S.SubTitle>Welcome to your data dashboard</S.SubTitle>
      <S.Main isNonMobile={isNonMobile}>
        <S.TopCards>
          {cardData.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </S.TopCards>
        <S.TopLineChart theme={theme} isNonMobile={isNonMobile}>
          <OverviewChart
            isDashboard={true}
            view={VIEW.SALES}
            outsideData={data}
          />
        </S.TopLineChart>
        <S.BottomTable theme={theme} isNonMobile={isNonMobile}>
          <Transactions
            showTitle={false}
            defaultPageSize={5}
            outsideData={data}
          />
        </S.BottomTable>
        <S.BottomPieChart theme={theme} isNonMobile={isNonMobile}>
          {!isLoading && data ? (
            <BreakdownChart data={data} />
          ) : (
            <Loading
              text="Loading..."
              indicator
              loading
              preventScrollThrough
              showOverlay
              size="large"
            />
          )}
        </S.BottomPieChart>
      </S.Main>
    </S.Container>
  );
}
