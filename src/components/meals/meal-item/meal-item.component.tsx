import { FC, useContext } from "react";
import styles from './meal-item.module.scss';

import { MealItemProps } from "@utils";

import { CartContext } from '@store';

import { MealItemForm } from '@components';

/**
 * Renders MealItem
 */
const MealItem: FC<MealItemProps> = ({ 
  description,
  name,
  price,
  key,
  id
}) => {
  const ctx = useContext(CartContext);

  const newPrice = `$${price.toFixed(2)}`;

  const handleAddToCart = (amount: string) => {
    ctx.addItem({
      amount: +amount,
      id,
      name,
      price
    });
  }
  return (
    <li className={styles.meal}>
      <section>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{newPrice}</div>
      </section>
      <section>
        <MealItemForm id={key} onAddToCart={handleAddToCart}/>
      </section>
    </li>
  );
};

export { MealItem };
