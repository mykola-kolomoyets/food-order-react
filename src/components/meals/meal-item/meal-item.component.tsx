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
  id
}) => {
  const ctx = useContext(CartContext);

  const newPrice = `$${price.toFixed(2)}`;

  const handleAddToCart = (amount: number) => {
    ctx.addItem({
      amount,
      id,
      name,
      price
    });

    console.log(ctx.items);
    
  }
  return (
    <li className={styles.meal}>
      <section>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{newPrice}</div>
      </section>
      <section>
        <MealItemForm id={id} onAddToCart={handleAddToCart}/>
      </section>
    </li>
  );
};

export { MealItem };
