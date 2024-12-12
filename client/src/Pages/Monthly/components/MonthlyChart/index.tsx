import { useTheme } from '@mui/material';
import { S } from './style';
import { ResponsiveLine } from '@nivo/line';
import React, { useMemo } from 'react';

type MonthlyChartProps = {
  data: any;
};
// eslint-disable-next-line react-refresh/only-export-components
function MonthlyChart({ data }: MonthlyChartProps) {
  const theme = useTheme();

  // 日期范围内的数据
  const total = useMemo(() => {
    if (!data) {
      return [];
    }
    const monthlyData = data.monthlyData;
    const res = ['totalSales', 'totalUnits'].map(
      (field: string, index: number) => ({
        id: field,
        color: index ? 'red' : 'blue',
        data: [],
      })
    );
    for (let i = 0; i < monthlyData.length; i++) {
      const curMonth = monthlyData[i];
      (res[0].data as any).push({
        x: curMonth.month,
        y: curMonth.totalSales,
      });
      (res[1].data as any).push({
        x: curMonth.month,
        y: curMonth.totalUnits,
      });
    }
    return res;
  }, [data]);

  return (
    <S.Container theme={theme}>
      <ResponsiveLine
        data={total}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: (theme.palette as any).secondary[200],
              },
            },
            legend: {
              text: {
                fill: (theme.palette as any).secondary[200],
              },
            },
            ticks: {
              line: {
                stroke: (theme.palette as any).secondary[200],
                strokeWidth: 1,
              },
              text: {
                fill: (theme.palette as any).secondary[200],
              },
            },
          },
          legends: {
            text: {
              fill: (theme.palette as any).secondary[200],
            },
          },
          tooltip: {
            container: {
              color: theme.palette.primary.main,
            },
          },
        }}
        margin={{ top: 20, right: 50, bottom: 50, left: 80 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: false,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        enableArea={false}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          format: (v) => v,
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Daily',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          tickValues: 5,
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: `Total`,
          legendOffset: -60,
          legendPosition: 'middle',
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: 'top-right',
            direction: 'column',
            justify: false,
            translateX: 10,
            translateY: -20,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </S.Container>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(MonthlyChart);
