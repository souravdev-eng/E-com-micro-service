import clsx from 'clsx';
import { FC, Fragment } from 'react';
import { Box, Rating } from '@mui/material';
// import { useParams } from 'react-router-dom';
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

  const renderQtyButtons = () => {
    return (
      <Box display='flex' mt={1}>
        <div className={styles.box}>
          <RemoveIcon fontSize='large' />
        </div>
        <div style={{ border: '1px solid #F0F0F0', padding: "10px 15px" }}>
          <Typography variant='h4'>1</Typography>
        </div>
        <div className={styles.box}>
          <AddIcon fontSize='large' />
        </div>
      </Box>
    )
  }

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
            <Typography variant='subtitle1'>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</Typography>
          </li>
        </ul>
        <div className={styles.divider} />
        <Typography variant='h6' component='h2'>
          USD (incl. of all taxes)
        </Typography>
        <div className={styles.priceContainer}>
          <Typography variant='h4' component='h2' mt={1} mb={1}>
            $600.72
          </Typography>
          <Typography variant='h5' component='h2' mt={1} mb={1}>
            $860.72
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
          <Typography variant='h5' mt={2} fontSize={16} fontWeight={600}>Description</Typography>
          <Typography variant='body1' fontSize={14} mt={1}>The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming-oriented features that are great for gamers.
            *Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.
            **65C2 Stand model is at a minimum 39% lighter than the C1 series.
            ***The 'Reducing CO2' footprint label applies to 65C2 only. All other C2 models feature a 'CO2 Measured' label.
            ****UL ECV certification based on TV frame and back cover. Percentage of recycled content varies by model and size.More
            ...
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
