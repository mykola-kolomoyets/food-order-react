import { FC } from 'react';

import styles from './cart.module.scss';

import { CartItem } from '@utils';
import { link } from 'fs';

const Cart: FC = () => {

  const initialCartItems: CartItem[] = [
    { 
      id: 'c1', 
      name: 'Sushi', 
      amount: 2,
      price: 19.99
    }
  ];

  const cartItems = initialCartItems.map(item => <li key={item.id}>{item.name}</li>);

  return (
    <div>
      <ul className={styles.cartItems}>
        {cartItems}  
      </ul> 

      <div className={styles.total}>
        <span>
          Total Amount
        </span>
        <span>
          35.62
        </span>
      </div>

      <div className={styles.actions}>
        <button className={styles.buttolAlt}>
          Close
        </button>

        <button className={styles.button}>
          Order
        </button>
      </div>
    </div>
  )
};

export { Cart };