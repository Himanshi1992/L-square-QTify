import React from 'react';
import styles from './Card.module.css';
import Chip from '@mui/material/Chip';

function Card({ image, follows, title }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardFooter}>
        <Chip
          label={`${follows} Follows`}
          className={styles.chip}
          classes={{ label: styles.chipLabel }}
        />
        <div className={styles.cardTitle}>{title}</div>
      </div>
    </div>
  );
}

export default Card;
