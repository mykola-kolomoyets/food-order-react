import { FC } from 'react';

import styles from './header-cart.module.scss';

import { CartIcon } from '@components';
import { HeaderCartProps } from '@utils';


const HeaderCart: FC<HeaderCartProps> = ({onModalOpen}) => {
  return (
    <button className={styles.button} onClick={onModalOpen}>
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

