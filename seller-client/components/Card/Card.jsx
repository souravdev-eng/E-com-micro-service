import styles from './Card.module.css';

const Card = ({ type = 'sm', children }) => {
  return (
    <div
      className={
        type === 'mid'
          ? styles.containerMid
          : type === 'big'
          ? styles.containerBig
          : styles.container
      }>
      {children}
    </div>
  );
};

export default Card;
