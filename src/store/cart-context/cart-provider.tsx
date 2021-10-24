import React, { FC } from 'react';

import { CartContext } from '@store';
import { 
  CartContextType, 
  CartItem, 
  ID 
} from '@utils';

const CartProvider: FC = ({children}) => {

  const handleAddCartItem = (item: CartItem) => {};
  const handleRemoveCartItem = (id: ID) => {};

  const initialValues: CartContextType = {
    items: [],
    totalAmount: 0,
    addItem: handleAddCartItem,
    removeItem: handleRemoveCartItem
  }
  return (
    <CartContext.Provider value={initialValues}>
      {children}
    </CartContext.Provider>
  )
};

export { CartProvider };
