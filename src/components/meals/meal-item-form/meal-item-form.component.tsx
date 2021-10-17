import { FC } from "react";
import styles from './meal-item-form.module.scss';

import { Input } from '@ui';
import { MealItemFormProps } from '@utils';

/**
 * Renders MealItemForm
 */
const MealItemForm: FC<MealItemFormProps> = ({id}) => {
  return (
    <form className={styles.form}>
      <Input 
        label='Amount'
        input={{
          id: `amount_${id}`,
          type: 'number',
          min: '1',
          max: '5',
          defaultValue: '1'
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export { MealItemForm };
