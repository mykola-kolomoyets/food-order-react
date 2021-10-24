import { CartItemProps } from '@utils';
import React, { FC } from 'react';

import styles from './cart-item.module.css';

const CartItem: FC<CartItemProps> = ({
  price,
  name,
  amount,
  onRemove,
  onAdd
}) => {
  const newPrice = `$${price.toFixed(2)}`;

  return (
    <li className={styles['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{newPrice}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export { CartItem };
