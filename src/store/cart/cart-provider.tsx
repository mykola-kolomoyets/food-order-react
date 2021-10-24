import React, { FC, useReducer } from 'react';

import { 
  CartContext,
  cartReducer,
  initialState
 } from '@store';

import { 
  CartContextType, 
  CartItem, 
  CartActions,
  ID, 
  CartState
} from '@utils';

const CartProvider: FC = ({children}) => {

  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const handleAddCartItem = (item: CartItem) => {
    dispatch({
      type: CartActions.addItem,
      payload: item
    });
  };
  const handleRemoveCartItem = (id: ID) => {
    dispatch({
      type: CartActions.removeItem,
      payload: id
    })
  };

  const initialValues: CartContextType = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
