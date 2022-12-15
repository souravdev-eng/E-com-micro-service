import { useEffect } from 'react';
import ProductData from '../../data/product.data.json';
import { ProductList } from '../../components';
import './home.style.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppRedux';
import { getProductList } from '../../store/actions/product.action';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { loading, productList } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  return (
    <div className='homeContainer'>
      <ProductList title='Top Product' data={productList} />
      <ProductList title='Best Seller' data={productList} />
    </div>
  );
};

export default HomePage;
