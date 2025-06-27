import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import styles from './Section.module.css';
import Card from '../Card/Card';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

let globalCollapseState = true;

function Section({ title, endpoint, showCollapse = true }) {
  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(globalCollapseState);
  const scrollRef = useRef(null);

  useEffect(() => {
    axios.get(endpoint)
      .then((res) => {
        setAlbums(res.data);
        console.log(`${title} API Response:`, res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch albums:", err);
      });
  }, [endpoint]);

  const toggleCollapse = () => {
    globalCollapseState = !globalCollapseState;
    setIsCollapsed(globalCollapseState);
  };

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const albumsToRender = isCollapsed ? albums.slice(0, 10) : albums;

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3>{title}</h3>
        {showCollapse && (
  <button className={styles.collapseBtn} onClick={toggleCollapse}>
    {isCollapsed ? 'Show All' : 'Collapse'}
  </button>
)}
      </div>

      <div className={styles.sliderContainer}>
        {/* Slider buttons only visible in collapsed mode */}
        <button
          className={`${styles.scrollBtn} ${!isCollapsed ? styles.hidden : ''}`}
          onClick={scrollPrev}
        >
          <ArrowBackIos fontSize="small" />
        </button>

        {/* Apply different styles for scroll vs grid */}
        <div
          className={
            isCollapsed ? styles.cardGridScroll : styles.cardGridGrid
          }
          ref={scrollRef}
        >
          {albumsToRender.map((album) => (
            <Card
              key={album.id}
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          ))}
        </div>

        <button
          className={`${styles.scrollBtn} ${!isCollapsed ? styles.hidden : ''}`}
          onClick={scrollNext}
        >
          <ArrowForwardIos fontSize="small" />
        </button>
      </div>
    </div>
  );
}

export default Section;
