
import './home.style.scss';
import { ProductList } from '../../components';
// import { getProductList } from '../../store/actions/product.action';
// import { useAppDispatch } from '../../hooks/useAppRedux';
import productList from '../../data/product.data.json'

const HomePage = () => {
  // const dispatch = useAppDispatch();
  // const { productList } = useAppSelector((state) => state.product);

  // useEffect(() => {
  //   dispatch(getProductList());
  // }, [dispatch]);

  return (
    <div className='flex px-6'>
      <ProductList title='Top Product' data={productList} />
      {/* <ProductList title='Best Seller' data={productList} /> */}
    </div>
  );
};

export default HomePage;
