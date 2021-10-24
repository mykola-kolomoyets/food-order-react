export type ID =  string | number;

export type Meals = {
  id: ID;
  name: string;
  description: string;
  price: number
};

export type MealItemProps = {
  key: ID;
  id: ID;
  name: string;
  description: string;
  price: number;
}

export type InputProps = {
  label: string;
  input: {
    id: string;
    type: string;
    min?: string;
    max?: string;
    step?: number;
    defaultValue: string;
  }
}

export type MealItemFormProps = {
  id: ID;
}

export type CartItem = {
  id: ID;
  name: string;
  amount: number;
  price: number;
}
export type CartContextType = {
  items: CartItem[],
  totalAmount: number,
  addItem: (item: CartItem) => void,
  removeItem: (id: ID) => void
}

export type CartProps = {
  onClose: () => void;
}

export type HeaderProps = {
  onModalOpen: () => void;
}

export type HeaderCartProps = {
  onModalOpen: () => void;
}