import { useTheme } from '@mui/material';
import { S } from './style';
import { ResponsiveLine } from '@nivo/line';
import React, { useMemo } from 'react';

type DaliyChartProps = {
  data: any;
  startDate: string;
  endDate: string;
};

// eslint-disable-next-line react-refresh/only-export-components
function DailyChart({ data, startDate, endDate }: DaliyChartProps) {
  const theme = useTheme();

  // 日期范围内的数据
  const total = useMemo(() => {
    if (!data) {
      return [];
    }
    const dailyData = data.dailyData;
    const res = ['totalSales', 'totalUnits'].map(
      (field: string, index: number) => ({
        id: field,
        color: index ? 'red' : 'blue',
        data: [],
      })
    );
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    for (let i = 0; i < dailyData.length; i++) {
      const curDay = dailyData[i];
      const beforeStart = new Date(curDay.date) < startDateObj;
      const afterEnd = new Date(curDay.date) > endDateObj;
      if (!beforeStart && !afterEnd) {
        (res[0].data as any).push({
          x: curDay.date,
          y: curDay.totalSales,
        });
        (res[1].data as any).push({
          x: curDay.date,
          y: curDay.totalUnits,
        });
      }
    }
    return res;
  }, [data, startDate, endDate]);

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
          format: (v) => v.slice(5, 10),
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
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 30,
            translateY: -40,
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
export default React.memo(DailyChart);
