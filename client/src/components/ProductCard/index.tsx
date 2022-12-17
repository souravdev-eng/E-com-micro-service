import { FC } from 'react';
import { Rating } from '@mui/material';
import './product-card.style.scss';

interface CardProps {
  title: string;
  price: number;
  image: string;
  rating: number;
}

const ProductCard: FC<CardProps> = ({ title, price, image, rating }) => {
  return (
    <div className='card'>
      <img className='card__image' src={image} alt={title} />
      <h3 className='card__title'>{title}</h3>
      <div className='card__info'>
        <span className='card__info__price'>₹{price}</span>
        <Rating name='half-rating-read' defaultValue={rating} precision={0.5} readOnly />
      </div>
    </div>
  );
};

export default ProductCard;
