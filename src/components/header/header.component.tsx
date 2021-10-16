import { FC, Fragment } from 'react';

import styles from './header.module.scss';

import Meals from '@img/meals.jpg';

import { HeaderCart } from '@components';

const Header: FC = props => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCart />
      </header>
      <section className={styles.mainImage}>
        <img src={Meals} alt="meals" />  
      </section> 
    </Fragment>
  )
};

export { Header };
