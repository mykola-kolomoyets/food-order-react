import React, { FC, Fragment, useState } from 'react';
import './App.css';

import { 
  Header,
  Meals,
  Cart
  } from '@components';

const App: FC = () => {
  const [isModalShown, setIsModalShown] = useState<boolean>(false);

  const handleCartOpenClick = () => {
    setIsModalShown(true);
  }

  const handleCartCloseClick = () => {
    setIsModalShown(false);
  }


  return (
    <Fragment>
      {isModalShown && <Cart/>}
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
