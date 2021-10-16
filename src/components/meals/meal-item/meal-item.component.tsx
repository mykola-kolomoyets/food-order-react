import { FC } from "react";
import styles from './meal-item.module.scss';

import { MealItemProps } from "@utils";

/**
 * Renders MealItem
 */
const MealItem: FC<MealItemProps> = ({ 
  description,
  name,
  price
}) => {
  const newPrice = `$${price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <section>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{newPrice}</div>
      </section>
      <section>

      </section>
    </li>
  );
};

export { MealItem };
