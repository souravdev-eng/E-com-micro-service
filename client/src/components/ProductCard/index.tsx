import { Rating } from '@mui/material';
import React, { FC } from 'react';
import './product-card.style.scss';

interface CardProps {
  id?: string;
  name: string;
  price: number;
  imageURL: string;
  rating?: number;
}

const ProductCard: FC<CardProps> = ({ name, price, imageURL, rating = 4.4 }) => {
  return (
    <div className='card'>
      <img className='card__image' src={imageURL} alt='product-image' />
      <h3 className='card__title'>{name}</h3>
      <div className='card__info'>
        <span className='card__info__price'>${price}</span>
        <Rating name='half-rating-read' defaultValue={rating} precision={0.5} readOnly />
      </div>
    </div>
  );
};

export default ProductCard;
