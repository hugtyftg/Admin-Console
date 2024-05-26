import { Header } from '@/components/Header';
import { useGetProductsQuery } from '@/store/api';
import { S } from './style';
import { IProduct } from '@/types/IProduct';
import { Product } from './Product';
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';

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
      <S.Content isNonMobile={isNonMobile}>
        {!isLoading &&
          data.productsWithStat.map((datum: IProduct) => (
            <Product key={datum._id} {...datum} />
          ))}
      </S.Content>
    </S.Container>
  );
}
