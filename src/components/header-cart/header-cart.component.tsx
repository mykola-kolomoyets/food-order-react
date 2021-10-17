import { FC } from 'react';

import styles from './header-cart.module.scss';

import { CartIcon } from '@components';


const HeaderCart: FC = props => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>

      <span>
        Your Cart
      </span>

      <span className={styles.badge}>
        0
      </span>
    </button>
  )
};

export { HeaderCart };

