import { FC } from 'react';
import ProductCard from '../ProductCard';
// import './product-list.style.scss';

interface CardListProps {
  title: string;
  data: {
    title: string;
    image: string;
    category: string;
    description: string;
    price: number;
    rating: number;
    sellerId: string;
    id: string;
  }[];
}

const ProductList: FC<CardListProps> = ({ title, data }) => {
  return (
    <>
      <div className='flex flex-wrap w-full items-center justify-start'>
        {data.map((el) => (
          <ProductCard key={el.id} {...el} />
        ))}
      </div>
    </>
    // <div className='listContainer'>
    //   <h2 className='listContainer__title'>{title}</h2>
    //   <div className='listContainer__grid'>

    //   </div>
    // </div>
  );
};

export default ProductList;
