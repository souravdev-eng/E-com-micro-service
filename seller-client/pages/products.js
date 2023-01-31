import React from 'react';
import { Sidebar } from '../components';
import styles from '../styles/Product.module.css';

const ProductPage = () => {
  return (
    <Sidebar>
      <div className={styles.main}>
        <div className={styles.inputContainer}>
          <div className={styles.input}>
            <input type='text' placeholder='Product title' />
          </div>
          <div className={styles.input}>
            <input type='text' placeholder='Product title' />
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default ProductPage;
