import { FC, useContext } from 'react';

import styles from './cart.module.scss';

import { CartItem, CartProps } from '@utils';
import { CartContext } from '@store';
import { Modal } from '@ui';

const Cart: FC<CartProps> = ({onClose}) => {

  const ctx = useContext(CartContext);

  const initialCartItems: CartItem[] = ctx.items;

  const totalAmount = ctx.items?.reduce((curr, item) => curr + (item.price * item.amount), 0);

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
          ${totalAmount.toFixed(2)}
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