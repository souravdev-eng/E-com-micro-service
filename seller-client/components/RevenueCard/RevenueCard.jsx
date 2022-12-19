import Image from 'next/image';
import React from 'react';
import Card from '../Card/Card';
import styles from './RevenueCard.module.css';

const RevenueCard = () => {
  return (
    <Card>
      <h4 className={styles.name}>Average Revenue</h4>
      <div className={styles.container}>
        <div>
          <h4 className={styles.headingPrice}>$25,565</h4>
          <div className={styles.growthWrapper}>
            <div className={styles.growthPercentage}>
              <Image src={'/assets/icons/Trendup.png'} width={16} height={16} />
              <span className={styles.growthText}>20%</span>
            </div>
            <span className={styles.price}>$20,452</span>
          </div>
        </div>
        <div className={styles.chart}></div>
      </div>
    </Card>
  );
};

export default RevenueCard;
