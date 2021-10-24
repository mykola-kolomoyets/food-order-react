import React, { FC, Fragment, useState } from 'react';
import './App.css';

import { 
  Header,
  Meals,
  Cart
  } from '@components';
import { CartProvider } from '@store';

const App: FC = () => {
  const [isModalShown, setIsModalShown] = useState<boolean>(false);

  const handleCartOpenClick = () => {
    setIsModalShown(true);
  }

  const handleCartCloseClick = () => {
    setIsModalShown(false);
  }


  return (
    <CartProvider>
      {isModalShown && <Cart onClose={handleCartCloseClick}/>}
      <Header onModalOpen={handleCartOpenClick}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
