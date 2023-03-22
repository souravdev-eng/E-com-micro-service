import React from 'react';
import { Rating } from '@mui/material';
import { useParams } from 'react-router-dom';
import ProductDetails from '../../data/productDetails.json';
import './product-details.style.scss';
import { useStyles } from './styles';
import Typography from '@mui/material/Typography/Typography';

const ProductDetail = () => {
  // let { id } = useParams();
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div>
        <div className={styles.listImageContainer}>
          <img src={ProductDetails.image} alt='abc' className={styles.imageSmall} />
        </div>
        <div className={styles.listImageContainer}>
          <img src={ProductDetails.image} alt='abc' className={styles.imageSmall} />
        </div>
        <div className={styles.listImageContainer}>
          <img src={ProductDetails.image} alt='abc' className={styles.imageSmall} />
        </div>
        <div className={styles.listImageContainer}>
          <img src={ProductDetails.image} alt='abc' className={styles.imageSmall} />
        </div>
      </div>
      <div className={styles.imageBigContainer}>
        <img src={ProductDetails.image} alt='abc' className={styles.imageBig} />
      </div>
      <div className={styles.descriptionContainer}>
        <Typography>Brand: LG</Typography>
        <Typography>Model: OLED42C2PSA</Typography>
        <Typography>Availability: Only 2 in Stock</Typography>
        <Typography>LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR</Typography>
        <Rating value={4.5} readOnly size={'medium'} />
        <ul>
          <li>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
          <li>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
          <li>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
          <li>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
        </ul>
        <div style={{ border: '1px solid #F0F0F0', margin: '8px 0', width: '60%' }} />
        <Typography>USD(incl. of all taxes)</Typography>
        <div>
          <Typography>$600.72</Typography>
          <Typography>$860.72</Typography>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
