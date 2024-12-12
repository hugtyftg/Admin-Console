import { useTheme } from '@mui/material';
import { S } from './style';
import React, { useMemo } from 'react';
import { ResponsivePie } from '@nivo/pie';

type BreakdownChartProps = {
  data: any;
};
// eslint-disable-next-line react-refresh/only-export-components
function BreakdownChart({ data }: BreakdownChartProps) {
  const theme = useTheme();

  // 各个类型的销售数据
  const total = useMemo(() => {
    if (!data) {
      return [];
    }
    const colors = [
      (theme.palette as any).secondary[500],
      (theme.palette as any).secondary[300],
      (theme.palette as any).secondary[300],
      (theme.palette as any).secondary[500],
    ];
    return Object.keys(data.salesByCategory).map(
      (key: string, index: number) => {
        return {
          id: key,
          label: key,
          value: data.salesByCategory[key],
          color: colors[index],
        };
      }
    );
  }, [data, theme]);

  return (
    <S.Container theme={theme}>
      <ResponsivePie
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
              color: 'black',
            },
          },
        }}
        colors={{ datum: 'data.color' }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={(theme.palette as any).secondary[50]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: (theme.palette as any).secondary[100],
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: (theme.palette as any).secondary[50],
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
export default React.memo(BreakdownChart);
