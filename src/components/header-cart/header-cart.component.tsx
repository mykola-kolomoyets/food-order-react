import { FC, useContext } from 'react';

import styles from './header-cart.module.scss';

import { CartIcon } from '@components';
import { CartContext } from '@store';
import { HeaderCartProps } from '@utils';


const HeaderCart: FC<HeaderCartProps> = ({onModalOpen}) => {

  const {
    items
  } = useContext(CartContext);

  const totalMealsAmount = items?.reduce(
    (current, item) => current + item?.amount, 
    0
  );

  return (
    <button className={styles.button} onClick={onModalOpen}>
      <span className={styles.icon}>
        <CartIcon />
      </span>

      <span>
        Your Cart
      </span>

      <span className={styles.badge}>
        {totalMealsAmount}
      </span>
    </button>
  )
};

export { HeaderCart };

