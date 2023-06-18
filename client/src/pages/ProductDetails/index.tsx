import clsx from 'clsx';
import { FC, Fragment, useEffect } from 'react';
import { Box, Rating } from '@mui/material';
import { useParams } from 'react-router-dom';
// import ProductDetails from '../../data/productDetails.json';
import { useStyles } from './styles';
import { Typography } from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppRedux';
import { getProductDetail } from '../../store/actions/product.action';
import { Loader } from '../../components';

const ProductDetail = () => {
  let { id } = useParams();
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const { productDetail, loading } = useAppSelector((state) => state.product);

  useEffect(() => {
    if (id) {
      dispatch(getProductDetail({ id }));
    }
  }, [dispatch]);

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

  const renderQtyButtons = () => {
    return (
      <Box display='flex' mt={1}>
        <div className={styles.box}>
          <RemoveIcon fontSize='large' />
        </div>
        <div style={{ border: '1px solid #F0F0F0', padding: '10px 15px' }}>
          <Typography variant='h4'>1</Typography>
        </div>
        <div className={styles.box}>
          <AddIcon fontSize='large' />
        </div>
      </Box>
    );
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {productDetail ? (
        <div className={styles.root}>
          <div>
            {[1, 2, 3, 4].map((_, idx) => (
              <Fragment key={idx}>
                <ShowSmallImage image={productDetail?.image} />
              </Fragment>
            ))}
          </div>

          <div className={styles.imageBigContainer}>
            <img src={productDetail?.image} alt='abc' className={styles.imageBig} />
          </div>
          <div className={styles.descriptionContainer}>
            {productDetail?.brand && (
              <Typography variant='h6'>Brand: {productDetail?.brand}</Typography>
            )}
            {productDetail?.model && (
              <Typography variant='h6' mt={1}>
                Model: {productDetail?.model}
              </Typography>
            )}

            <Typography variant='h6' mt={1}>
              Availability: Only 2 in Stock
            </Typography>
            <Typography variant='h3' component='h2' mt={1} mb={1}>
              {productDetail?.title}
            </Typography>
            <Rating value={productDetail?.rating} readOnly size={'large'} />
            <ul>
              <li>
                <Typography variant='subtitle1'>
                  α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling
                </Typography>
              </li>
            </ul>

            <div className={styles.divider} />

            <Typography variant='h6' component='h2'>
              USD (incl. of all taxes)
            </Typography>
            <div className={styles.priceContainer}>
              <Typography variant='h4' component='h2' mt={1} mb={1}>
                ${(productDetail?.price + 250).toFixed(2)}
              </Typography>
              <Typography variant='h5' component='h2' mt={1} mb={1}>
                ${productDetail?.price.toFixed(2)}
              </Typography>
            </div>
            <div style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
              {renderQtyButtons()}
              <div className={clsx(styles.button, styles.buttonRed)}>
                <span className={clsx(styles.buttonText, styles.whiteText)}>Buy Now</span>
              </div>
              <div className={clsx(styles.button, styles.buttonRedOutline)}>
                <span className={clsx(styles.buttonText, styles.redText)}>Add to Cart</span>
              </div>
            </div>
            <div>
              <Typography variant='h5' mt={2} fontSize={16} fontWeight={600}>
                Description
              </Typography>
              <Typography variant='body1' fontSize={14} mt={1}>
                {productDetail?.description}
              </Typography>
            </div>
          </div>
        </div>
      ) : (
        <h3>No Product found</h3>
      )}
    </>
  );
};

export default ProductDetail;
