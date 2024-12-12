import { S } from './style';
import { useTheme } from '@mui/material';
import { Select } from 'tdesign-react';
import { useState } from 'react';
import OverviewChart from './OverviewChart.tsx';
import { VIEW } from '@/types.ts';

const options = [
  {
    label: VIEW.SALES,
    value: VIEW.SALES,
  },
  {
    label: VIEW.UNITS,
    value: VIEW.UNITS,
  },
];
export default function Overview() {
  const theme = useTheme();
  const [view, setView] = useState(VIEW.SALES);
  const changeView = (value: any) => {
    setView(value);
  };
  return (
    <S.Container theme={theme}>
      <S.Title>OVERVIEW</S.Title>
      <S.SubTitle>Overview of general revenue and profit</S.SubTitle>
      <S.Select theme={theme}>
        <Select
          onChange={changeView}
          size="medium"
          value={view}
          options={options}
        ></Select>
      </S.Select>
      <S.Graph theme={theme}>
        <OverviewChart isDashboard={false} view={view} />
      </S.Graph>
    </S.Container>
  );
}
