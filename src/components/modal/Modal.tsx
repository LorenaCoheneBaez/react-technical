import React from 'react';
import { ModalProps } from './Modal.interface';
import styles from './Modal.module.scss'

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, details, title }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.overlay} >
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.content}>
          <div className={styles.left}>
            <h3>Descripción</h3>
            <p>{details.info}</p>
          </div>
          <div className={styles.right}>
            <p><strong>Precio:</strong> ${details.price}</p>
            <p><strong>Dirección:</strong> {details.address}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Modal;
