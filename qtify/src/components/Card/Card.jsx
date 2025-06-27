import React from 'react';
import styles from './Card.module.css';
import Chip from '@mui/material/Chip';

function Card({ image, follows, title }) {
  return (
    <div className={styles.card} data-testid="album-card">
      <img
        src={image}
        alt={title}
        className={styles.cardImage}
        role="img"
        aria-label={title}
      />
      <div className={styles.cardFooter}>
        <Chip
          label={`${follows} Follows`}
          sx={{
            height: 30,
    borderRadius: '10px',
    padding: '0px 8px',
    backgroundColor: 'var(--color-black)',
    color: 'var(--color-white)',  
    fontSize: '10px',
    fontWeight: 400,
    lineHeight: '100%',
    fontFamily: 'Poppins',
  }}
          className={styles.chip}
          classes={{ label: styles.chipLabel }}
        />
       
      </div>
      <div className={styles.titleBar}>
          <div className={styles.cardTitle}>{title}</div>
        </div>
    </div>
    
  );
}

export default Card;
