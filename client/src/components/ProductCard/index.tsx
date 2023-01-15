import { FC } from 'react';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import './product-card.style.scss';

interface CardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  rating: number;
}

const ProductCard: FC<CardProps> = ({ id, title, price, image, rating }) => {
  return (
    <div className='card'>
      <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
        <img className='card__image' src={image} alt={title} />
        <h3 className='card__title'>{title}</h3>
        <div className='card__info'>
          <span className='card__info__price'>₹{price}</span>
          <Rating name='half-rating-read' defaultValue={rating} precision={0.5} readOnly />
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
