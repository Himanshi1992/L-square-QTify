import React from 'react';
import styles from './Card.module.css';
import Chip from '@mui/material/Chip';

function Card({ image, follows, likes, title, type = 'album' }) {
  const label = type === 'song' ? `${likes} Likes` : `${follows} Follows`;

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
    height: '24px',
    borderRadius: '12px',
    backgroundColor: 'var(--color-black)',
    color: 'var(--color-white)',
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '100%',
    fontFamily: 'Poppins',
    padding: '0 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
  className={styles.chip}
/>
      </div>
      <div className={styles.titleBar}>
        <div className={styles.cardTitle}>{title}</div>
      </div>
    </div>
  );
}

export default Card;
