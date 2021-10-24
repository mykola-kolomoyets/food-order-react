import { FC, useContext } from 'react';

import styles from './cart.module.scss';

import { CartItem as CartItemComponent} from '@components';

import { CartItem, CartProps, ID } from '@utils';
import { CartContext } from '@store';
import { Modal } from '@ui';

const Cart: FC<CartProps> = ({onClose}) => {

  const ctx = useContext(CartContext);

  const initialCartItems: CartItem[] = ctx.items;

  const totalAmount = ctx.items?.reduce((curr, item) => curr + (item.price * item.amount), 0);
  
  const handleAddToCart = (item: CartItem) => {}

  const handleRemoveFromCart = (id: ID) => {}

  const cartItems = initialCartItems.map(
    item => 
      <CartItemComponent 
        key={item.id}
        amount={item.amount}
        name={item.name}
        price={item.price}
        onAdd={handleAddToCart.bind(null, item)}
        onRemove={handleRemoveFromCart.bind(null, item.id)}
      />
  );


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