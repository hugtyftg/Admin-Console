import { useGetSalesQuery } from '@/store/api';
import { useTheme } from '@mui/material';
import { S } from './style';
import { Loading } from 'tdesign-react';
import { ResponsiveLine } from '@nivo/line';
import React, { useMemo } from 'react';
import { VIEW } from './types';

type OverviewChartProps = {
  isDashboard?: boolean;
  view: VIEW;
};

// eslint-disable-next-line react-refresh/only-export-components
function OverviewChart({ isDashboard = false, view }: OverviewChartProps) {
  const theme = useTheme();
  const { data, isLoading } = useGetSalesQuery('');

  // 累计销量
  const [totalSalesLine, totalUnitsLine] = useMemo(() => {
    if (!data) return [];
    const { monthlyData } = data;
    const totalSalesLine = {
      id: 'totalSales',
      color: theme.palette.secondary.main,
      data: [],
    };
    const totalUnitsLine = {
      id: 'totalUnits',
      color: (theme.palette as any).secondary[600],
      data: [],
    };

    let accSales = 0;
    let accUnits = 0;
    for (let i = 0; i < monthlyData.length; i++) {
      const curMonth = monthlyData[i];
      accSales = accSales + curMonth.totalSales;
      accUnits = accUnits + curMonth.totalUnits;
      (totalSalesLine.data as any).push({
        x: curMonth.month,
        y: accSales,
      });
      (totalUnitsLine.data as any).push({
        x: curMonth.month,
        y: accUnits,
      });
    }
    return [[totalSalesLine], [totalUnitsLine]];
  }, [data, theme]);

  return (
    <S.Container theme={theme}>
      {!isLoading && data ? (
        <ResponsiveLine
          data={
            view === VIEW.SALES
              ? (totalSalesLine as any)
              : (totalUnitsLine as any)
          }
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
          enableArea={isDashboard}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            format: (v) => {
              if (isDashboard) return v.slice(0, 3);
              return v;
            },
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? '' : 'Month',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            tickValues: 5,
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard
              ? ''
              : `Total ${view === 'sales' ? 'Revenue' : 'Units'} for Year`,
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
          legends={
            !isDashboard
              ? [
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
                ]
              : undefined
          }
        />
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
    </S.Container>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(OverviewChart);
