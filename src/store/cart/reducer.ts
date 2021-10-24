import { 
  CartAction, 
  CartActions, 
  CartContextType, 
  CartItem, 
  CartState 
} from '@utils';
import React, { Reducer, useReducer } from 'react';

const initialState: CartState = {
  items: [],
  totalAmount: 0
}

const cartReducer: Reducer<CartState, CartAction> = (
  state: CartState, 
  action: CartAction
) => {
  switch(action.type) {
    case CartActions.addItem: {
      const currentItem = action.payload as CartItem;
      return {
        items: [...state.items, currentItem],
        totalAmount: state.totalAmount + (currentItem.price * currentItem.amount)
      } as CartState
    }
    case CartActions.removeItem: {
      const removedItem = state?.items?.find(item => item.id === action.payload);

      return {
        items: state?.items?.filter(item => item.id !== action.payload),
        totalAmount: state.totalAmount - removedItem!.amount
      } as CartState
    }
    default: 
      return initialState;
  }
}

export { cartReducer, initialState }
