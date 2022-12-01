import ProductData from '../../data/product.data.json';
import { ProductList } from '../../components';
import './home.style.scss';

const HomePage = () => {
  return (
    <div className='homeContainer'>
      <ProductList title='Top Product' data={ProductData} />
      <ProductList title='Best Seller' data={ProductData} />
    </div>
  );
};

export default HomePage;
