import { FC } from 'react';

import styles from './cart.module.scss';

import { CartItem, CartProps } from '@utils';
import { link } from 'fs';
import { Modal } from '@ui';

const Cart: FC<CartProps> = ({onClose}) => {

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
    <Modal>
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
        <button 
          className={styles.buttolAlt}
          onClick={onClose}
        >
          Close
        </button>

        <button className={styles.button}>
          Order
        </button>
      </div>
    </Modal>
  )
};

export { Cart };