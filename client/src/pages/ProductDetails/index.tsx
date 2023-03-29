import React, { FC, Fragment } from 'react';
import { Rating } from '@mui/material';
import { useParams } from 'react-router-dom';
import ProductDetails from '../../data/productDetails.json';
import { useStyles } from './styles';
import { Typography } from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
const ProductDetail = () => {
  // let { id } = useParams();
  const styles = useStyles();

  interface Props {
    image: string;
  }

  const ShowSmallImage: FC<Props> = ({ image }) => {
    return (
      <div className={styles.listImageContainer}>
        <img src={image} alt='abc' className={styles.imageSmall} />
      </div>
    );
  };

  return (
    <div className={styles.root}>
      <div>
        {[1, 2, 3, 4].map((_, idx) => (
          <Fragment key={idx}>
            <ShowSmallImage image={ProductDetails.image} />
          </Fragment>
        ))}
      </div>

      <div className={styles.imageBigContainer}>
        <img src={ProductDetails.image} alt='abc' className={styles.imageBig} />
      </div>
      <div className={styles.descriptionContainer}>
        <Typography variant='h6'>Brand: LG</Typography>
        <Typography variant='h6' mt={1}>
          Model: OLED42C2PSA
        </Typography>
        <Typography variant='h6' mt={1}>
          Availability: Only 2 in Stock
        </Typography>
        <Typography variant='h3' component='h2' mt={1} mb={1}>
          LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR
        </Typography>
        <Rating value={4.5} readOnly size={'large'} />
        <ul>
          <li>
            <Typography>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</Typography>
          </li>
        </ul>
        <div style={{ border: '1px solid #F0F0F0', margin: '8px 0', width: '60%' }} />
        <Typography variant='h6' component='h2'>
          USD (incl. of all taxes)
        </Typography>
        <div style={{ display: 'flex', gap: '20px', margin: '2px 0px', alignItems: 'center' }}>
          <Typography variant='h4' component='h2' mt={1} mb={1}>
            $600.72
          </Typography>
          <Typography variant='h5' component='h2' mt={1} mb={1}>
            $860.72
          </Typography>
        </div>
        <div>
          <div>
            <RemoveIcon fontSize='large' />
          </div>
          <div>
            <Typography variant='h4'>1</Typography>
          </div>
          <div>
            <AddIcon fontSize='large' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
