import { useTheme } from '@mui/material';
import { S } from './style';
import Card from './components/Card';
import {
  DashboardIcon,
  CallIcon,
  PinIcon,
  MapConnectionIcon,
} from 'tdesign-icons-react';

// type DashboardPropType = {};
export default function Dashboard() {
  const theme = useTheme();

  const cardData = [
    {
      title: 'Total Customers',
      icon: <DashboardIcon />,
      number: 5251,
      percentage: '+5%',
    },
    {
      title: 'Sales Today',
      icon: <CallIcon />,
      number: 5251,
      percentage: '+5%',
    },
    {
      title: 'Monthly Sales',
      icon: <PinIcon />,
      number: 5251,
      percentage: '+5%',
    },
    {
      title: 'Yearly Sales',
      icon: <MapConnectionIcon />,
      number: 5251,
      percentage: '+5%',
    },
  ];
  return (
    <S.Container theme={theme}>
      <S.Title>DASHBOARD</S.Title>
      <S.SubTitle>Welcome to your data dashboard</S.SubTitle>
      <S.Main>
        <S.Top>
          <S.TopCards>
            {cardData.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </S.TopCards>
          <S.TopLineChart theme={theme}></S.TopLineChart>
        </S.Top>
        <S.Bottom>
          <S.BottomTable theme={theme}></S.BottomTable>
          <S.BottomPieChart theme={theme}></S.BottomPieChart>
        </S.Bottom>
      </S.Main>
    </S.Container>
  );
}
