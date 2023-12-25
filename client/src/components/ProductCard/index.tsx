import { FC } from 'react';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
// import './product-card.style.scss';

interface CardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  rating: number;
  tag?: string
}

const ProductCard: FC<CardProps> = ({ id, title, price, image, rating, tag = "men" }) => {
  return (
    // <div className='card'>
    //   <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
    //     <img className='card__image' src={image} alt={title} />
    //     <h3 className='card__title'>{title}</h3>
    //     <div className='card__info'>
    //       <span className='card__info__price'>₹{price}</span>
    //       <Rating name='half-rating-read' defaultValue={rating} precision={0.5} readOnly />
    //     </div>
    //   </Link>
    // </div>
    <div className='w-72 h-96 my-2 mx-2 shadow-xl rounded-lg overflow-hidden'>
      <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
        <div className='overflow-hidden w-full h-3/6'>
          <img className='w-full h-full object-cover object-center' src={image} alt={title} />
        </div>

        <div className='py-1 px-2'>
          <p className='text-xs font-semibold py-1 text-zinc-400'>{tag.toUpperCase()}</p>
          <h3 className='text-lg mb-1 font-semibold line-clamp-1'>{title}</h3>
          <p className='text-sm line-clamp-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis asperiores, quaerat eligendi dolorum quasi at error perspiciatis facere tempora? Sunt aut aliquid libero? Eaque, id odit? Iusto expedita recusandae perferendis.</p>
          <div className='relative mt-1 flex justify-between'>
            <div className='absolute inset-x-0 top-2/4'>
              <span className='text-sm text-zinc-500 line-through mr-1 font-semibold'>₹{price.toFixed(2)}</span>
              <span className='text-lg text-yellow-500 font-semibold'>₹{price.toFixed(2)}</span>
            </div>
            {/* <Rating style={{ fontSize: 14 }} name='half-rating-read' defaultValue={rating} precision={0.5} readOnly /> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
