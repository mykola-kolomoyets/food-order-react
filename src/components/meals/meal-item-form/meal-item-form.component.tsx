import { 
  FC, 
  MutableRefObject, 
  useRef, 
  useState,
  useEffect
} from "react";

import styles from './meal-item-form.module.scss';

import { Input } from '@ui';
import { MealItemFormProps } from '@utils';

/**
 * Renders MealItemForm
 */
const MealItemForm: FC<MealItemFormProps> = ({id, onAddToCart}) => {
  const amountRef = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  const handleSubmitClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredAmount = +amountRef.current.value;
    onAddToCart(enteredAmount);
  }
  
  return (
    <form 
      className={styles.form}
      onSubmit={handleSubmitClick}
    >
      <Input 
        ref={amountRef}
        label='Amount'
        input={{
          id: `amount_${id}`,
          type: 'number',
          min: '1',
          max: '5',
          defaultValue: '1'
        }}
      />
      <button type="submit">
        + Add
      </button>
    </form>
  );
};

export { MealItemForm };
