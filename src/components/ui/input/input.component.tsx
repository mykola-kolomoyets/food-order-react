import { FC, forwardRef, Component }from "react";
import styles from './input.module.scss';

import { InputProps } from '@utils';

/**
 * Renders Input
 */
const Input = forwardRef<HTMLInputElement, InputProps>(({
  input, 
  label
}, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>
        {label}
      </label>
      <input {...input} ref={ref}/>
    </div>
  );
});

export { Input };
