import React, { useState } from 'react';
import { CardProps } from './Card.interface';
import Modal from '../modal/Modal';
import styles from './Card.module.scss';

const Card: React.FC<CardProps> = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const imagePath = new URL(`../../assets/products/${item.image}`, import.meta.url).href;

  return (
    <div className={styles.card}>
      <img src={imagePath} alt={item.title} className={styles.cardImage} loading="lazy" />
      <section className={styles.cardContent}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
        <button className={styles.cardButton} onClick={handleOpenModal}>Ver más</button>
      </section>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} details={item.detail} title={item.title}/>
    </div>
  );
};

export default Card;
