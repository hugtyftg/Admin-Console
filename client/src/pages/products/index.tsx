import { Header } from '@/layout/Header';
import { useGetProductsQuery } from '@/store/api';
import { S } from './style';
import { IProduct } from '@/types/IProduct';
import { Product } from './Product';
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { Loading } from 'tdesign-react';

// type ProductsPropsType = {};
export default function Products() {
  const { data, isLoading } = useGetProductsQuery('');

  const isNonMobile = useMediaQuery('(min-width: 1000px)');
  useEffect(() => {
    console.log(isNonMobile);
  }, [isNonMobile]);
  return (
    <S.Container>
      <S.HeaderWrapper>
        <Header title="PRODUCT" subTitle="see your list of products ~" />
      </S.HeaderWrapper>
      {!isLoading && data ? (
        <S.Content isNonMobile={isNonMobile}>
          {data.productsWithStat.map((datum: IProduct) => (
            <Product key={datum._id} {...datum} />
          ))}
        </S.Content>
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
