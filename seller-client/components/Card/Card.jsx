import styles from './Card.module.css';

const Card = ({ type = 'sm', children }) => {
  return (
    <div
      attribute={false}
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
