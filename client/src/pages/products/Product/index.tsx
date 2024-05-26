import { IProduct } from '@/types/IProduct';
import { Rating, useTheme } from '@mui/material';
import { Card, Typography, Collapse } from 'tdesign-react';
import { S } from './style';

export function Product({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stat,
}: Partial<IProduct>) {
  const theme = useTheme();
  const { Title, Text, Paragraph } = Typography;

  return (
    <Card hoverShadow={true} bordered={true} css={S.cardCss(theme)}>
      <Text
        style={{
          color: (theme.palette.secondary as any)[200],
        }}
      >
        {category}
      </Text>
      <Title level="h5">{name}</Title>
      <Paragraph>${Number(price?.toFixed(2))}</Paragraph>
      <Rating
        style={{
          margin: '0.5rem 0',
        }}
        value={rating}
        readOnly
      />
      <Paragraph>{description}</Paragraph>
      <Collapse
        style={{
          marginTop: '0.5rem',
        }}
      >
        <Collapse.Panel expandIcon={false} header={'see more'}>
          <Paragraph>id: {_id}</Paragraph>
          <Paragraph>Supply: {supply}</Paragraph>
          {stat && (
            <Paragraph>
              Yearly Total Sales: {stat[0]?.yearlySalesTotal}
            </Paragraph>
          )}
          {stat && (
            <Paragraph>
              Yearly Total Sold Units: {stat[0].yearlyTotalSoldUnits}
            </Paragraph>
          )}
        </Collapse.Panel>
      </Collapse>
    </Card>
  );
}
