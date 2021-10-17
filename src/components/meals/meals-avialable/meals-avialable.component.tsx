import { FC } from "react";

import styles from './meals-avialable.module.scss';

import { DUMMY_MEALS } from '@data';

import { Card } from '@ui';

import { MealItem } from '@components'

/**
 * Renders MealsAvialable
 */
const MealsAvialable: FC = () => {
  const mealsList = DUMMY_MEALS.map(({id, ...mealData}) => <MealItem id={id} key={id} {...mealData}/>);
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  );
};

export { MealsAvialable };
