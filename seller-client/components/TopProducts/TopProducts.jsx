import React from 'react';
import Image from 'next/image';
import { GrowthChartSm } from '../../global';
import Card from '../Card/Card';
import styles from './TopProduct.module.css';

const ProductCard = () => {
  return (
    <div className={styles.productCard}>
      <div>
        <Image
          src={'/assets/img/snikers.jpg'}
          width={56}
          height={56}
          className={styles.cardImage}
        />
      </div>
      <div style={{ marginLeft: 8 }}>
        <h3 className={styles.productCardTitle}>Speed Force : Knit </h3>
        <div className={styles.cardInfoContainer}>
          <span className={styles.tag}>Women</span>
          <GrowthChartSm grow value={30} />
        </div>
      </div>
    </div>
  );
};

const TopProducts = () => {
  return (
    <Card type='mid'>
      <h1 className={styles.title}>Top Products</h1>
      <div className={styles.searchContainer}>
        <div className={styles.searchBox}>
          <Image src={'/assets/icons/Search.png'} width={20} height={20} />
          <input placeholder='Search' className={styles.input} />
        </div>
      </div>
      <div className={styles.listContainer}>
        {[1, 2, 3, 4, 5].map((el, idx) => (
          <ProductCard key={idx} />
        ))}
      </div>
    </Card>
  );
};

export default TopProducts;
