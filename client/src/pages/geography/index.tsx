import { useTheme } from '@mui/material';
import { S } from './style';
import { useGetGeographyQuery } from '@/store/api';
import { Loading } from 'tdesign-react';
import { useEffect } from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import { geoData } from '@/utils/geoData';

export default function Geography() {
  const theme = useTheme();
  const { data, isLoading } = useGetGeographyQuery('');
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <S.Container theme={theme}>
      <S.Title>Geography</S.Title>
      {!isLoading && data ? (
        <S.Graph theme={theme}>
          {' '}
          <ResponsiveChoropleth
            data={data}
            theme={{
              axis: {
                domain: {
                  line: {
                    stroke: (theme.palette as any).neutral.main,
                  },
                },
                legend: {
                  text: {
                    fill: (theme.palette as any).neutral.main,
                  },
                },
                ticks: {
                  line: {
                    stroke: (theme.palette as any).neutral.main,
                    strokeWidth: 1,
                  },
                  text: {
                    fill: (theme.palette as any).neutral.main,
                  },
                },
              },
              legends: {
                text: {
                  fill: (theme.palette as any).neutral.main,
                },
              },
              tooltip: {
                container: {
                  color: (theme.palette as any).neutral.main,
                },
              },
            }}
            features={geoData.features}
            margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
            colors="nivo"
            domain={[0, 60]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={150}
            projectionTranslation={[0.45, 0.6]}
            projectionRotation={[0, 0, 0]}
            borderWidth={1.3}
            borderColor="white"
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'column',
                justify: true,
                translateX: 0,
                translateY: -125,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: (theme.palette as any).neutral.main,
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: (theme.palette as any).neutral.main,
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        </S.Graph>
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
