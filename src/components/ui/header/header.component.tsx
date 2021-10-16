import { FC, Fragment } from 'react';

import './header.scss';

import Meals from '@img/meals.jpg';

const Header: FC = props => {
  return (
    <Fragment>
      <header>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <section>
        <img src={Meals} alt="meals" />  
      </section> 
    </Fragment>

  )
};

export { Header };
