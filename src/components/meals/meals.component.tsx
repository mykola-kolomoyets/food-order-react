import { FC, Fragment } from 'react';

import {
  MealsSummary,
  MealsAvialable
} from '@components';

const Meals: FC = () => {
  return (
    <Fragment>
      <MealsSummary />
      <MealsAvialable />
    </Fragment>
  )
};

export { Meals }