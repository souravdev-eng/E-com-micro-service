import React from 'react';
import { Rating } from '@mui/material';
import { useParams } from 'react-router-dom';
import ProductDetails from '../../data/productDetails.json';
import './product-details.style.scss';

const ProductDetail = () => {
  let { id } = useParams();

  return (
    <div className='container'>
      <div className='productInfo'>
        <img src={ProductDetails.image} className='productInfo__image' />
        <div>
          <h2 className='productInfo__title'>{ProductDetails.title}</h2>
          <Rating
            name='half-rating-read'
            defaultValue={ProductDetails.rating}
            precision={0.5}
            readOnly
            size='large'
          />
          <div className='productDetails'>
            <h5 className='productDetails__price'>₹{ProductDetails.price}</h5>
            <span className='productDetails__description'>{ProductDetails.description}</span>
          </div>
          <div className='buttonContainer'>
            <button className='btn btn-outline'>Add to cart</button>
            <button className='btn btn-fill'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
