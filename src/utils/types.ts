export type Meals = {
  id: string | number;
  name: string;
  description: string;
  price: number
};

export type MealItemProps = {
  key: string | number;
  name: string;
  description: string;
  price: number;
}
