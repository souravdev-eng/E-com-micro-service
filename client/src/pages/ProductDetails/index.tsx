import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let { id } = useParams();
  return (
    <div>
      <h2>ProductDetail {id}</h2>
    </div>
  );
};

export default ProductDetail;
