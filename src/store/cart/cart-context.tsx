import { CartItem, ID, CartContextType } from '@utils';
import { createContext } from 'react';

const CartContext = createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  addItem: (item: CartItem) => {},
  removeItem: (id: ID) => {}
});

export { CartContext };
