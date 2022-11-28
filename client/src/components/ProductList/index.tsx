import { FC } from 'react';
import ProductCard from '../ProductCard';
import './product-list.style.scss';

interface CardListProps {
  title: string;
  data: {
    id?: string;
    name: string;
    price: number;
    img: string;
    rating?: number;
  }[];
}

const ProductList: FC<CardListProps> = ({ title, data }) => {
  return (
    <div className='listContainer'>
      <h2 className='listContainer__title'>{title}</h2>
      <div className='listContainer__grid'>
        {data.map((el) => (
          <ProductCard name={el.name} imageURL={el.img} price={el.price} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
