import React, { FC, Fragment } from "react";
import ReactDOM from "react-dom";
import styles from './modal.module.scss';

/**
 * Renders Modal
 */
const BackDrop: FC = () => <div className={styles.backdrop}/>;


const ModalOverlay: FC = ({children}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

const portalElement = document.getElementById('overlays')!;

const Modal: FC = ({children}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
      <BackDrop/>,
      portalElement
      )}

      {ReactDOM.createPortal(
      <ModalOverlay>{children}</ModalOverlay>,
      portalElement
      )}
    </Fragment>
  )
}

export { Modal };
