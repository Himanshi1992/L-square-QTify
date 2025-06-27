import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Section.module.css';
import Card from '../Card/Card';


let globalCollapseState = true;

function Section({ title, endpoint }) {
  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(globalCollapseState);

  useEffect(() => {
    axios.get(endpoint)
      .then((res) => setAlbums(res.data))
      .catch((err) => console.error("Failed to fetch albums:", err));
  }, [endpoint]);

  const toggleCollapse = () => {
    globalCollapseState = !globalCollapseState;
    setIsCollapsed(globalCollapseState);
  };

  const albumsToRender = isCollapsed ? albums.slice(0, 10) : albums;

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3>{title}</h3>
        {albums.length > 10 && (
          <button className={styles.collapseBtn} onClick={toggleCollapse}>
            {isCollapsed ? 'Show All' : 'Collapse'}
          </button>
        )}
      </div>

      <div className={styles.cardGrid}>
        {albumsToRender.map((album) => (
          <Card
            key={album.id}
            image={album.image}
            title={album.title}
            follows={album.follows}
          />
        ))}
      </div>
    </div>
  );
}

export default Section;
