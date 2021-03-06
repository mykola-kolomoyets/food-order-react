import { FC } from "react";
import styles from './card.module.scss';

/**
 * Renders Card
 */
const Card: FC = ({ children }) => {
  return (
    <div className={styles.card}>
      {children}
    </div>
  );
};

export { Card };
