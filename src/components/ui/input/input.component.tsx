import { FC }from "react";
import styles from './input.module.scss';

import { InputProps } from '@utils';

/**
 * Renders Input
 */
const Input: FC<InputProps> = ({
  label, 
  input
}) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>
        {label}
      </label>
      <input {...input}/>
    </div>
  );
};

export { Input };
