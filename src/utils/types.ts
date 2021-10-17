export type Meals = {
  id: string | number;
  name: string;
  description: string;
  price: number
};

export type MealItemProps = {
  key: string | number;
  id: string | number;
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
  id: string | number;
}

export type CartItem = {
  id: string | number;
  name: string;
  amount: number;
  price: number;
}

