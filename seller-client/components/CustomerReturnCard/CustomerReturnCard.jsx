import Image from 'next/image';
import React from 'react';
import Card from '../Card/Card';
import styles from './CustomerReturnCard.module.css';

const CustomerReturnCard = () => {
  return (
    <Card>
      <h4 className={styles.name}>Customer Return</h4>
      <div className={styles.container}>
        <div>
          <h4 className={styles.headingPrice}>7956</h4>
          <div className={styles.growthWrapper}>
            <div className={styles.growthPercentage}>
              <Image src={'/assets/icons/Trenddown.png'} width={16} height={16} />
              <span className={styles.growthText}>15%</span>
            </div>
            <span className={styles.price}>6759</span>
          </div>
        </div>
        <div className={styles.chart}></div>
      </div>
    </Card>
  );
};

export default CustomerReturnCard;
