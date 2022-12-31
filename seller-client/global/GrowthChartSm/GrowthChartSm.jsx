import Image from 'next/image';
import React from 'react';
import styles from './GrowthChartSm.module.css';

const GrowthChartSm = ({ grow, value }) => {
  return (
    <div className={grow ? styles.growthPercentage : styles.downPercentage}>
      <Image
        src={grow ? '/assets/icons/Trendup.png' : '/assets/icons/Trenddown.png'}
        width={16}
        height={16}
      />
      <span className={grow ? styles.growthText : styles.downText}>{value}%</span>
    </div>
  );
};

export default GrowthChartSm;
