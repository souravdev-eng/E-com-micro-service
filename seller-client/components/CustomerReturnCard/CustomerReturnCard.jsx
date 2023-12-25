import React from 'react';
import { GrowthChartSm } from '../../global';
import styles from './CustomerReturnCard.module.css';
import Card from '../Card/Card';

const CustomerReturnCard = () => {
  return (
    <Card>
      <h4 className={styles.name}>Customer Return</h4>
      <div className={styles.container}>
        <div>
          <h4 className={styles.headingPrice}>7956</h4>
          <div className={styles.growthWrapper}>
            <GrowthChartSm value={16} />
            <span className={styles.price}>6,759</span>
          </div>
        </div>
        <div className={styles.chart}></div>
      </div>
    </Card>
  );
};

export default CustomerReturnCard;
