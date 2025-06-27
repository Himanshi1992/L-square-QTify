import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

function Section({ title, endpoint, showCollapse = true }) {
  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    axios
      .get(endpoint)
      .then((res) => {
        setAlbums(res.data);
        console.log(`${title} API Response:`, res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch albums:", err);
      });
  }, [endpoint]);

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3>{title}</h3>
        {showCollapse && (
          <button className={styles.collapseBtn} onClick={toggleCollapse}>
            {isCollapsed ? "Show All" : "Collapse"}
          </button>
        )}
      </div>

      <div className={styles.sliderContainer}>
        {isCollapsed ? (
          <Carousel>
            {albums.map((album) => (
              <Card
                key={album.id}
                image={album.image}
                title={album.title}
                follows={album.follows}
              />
            ))}
          </Carousel>
        ) : (
          <div className={styles.cardGrid}>
            {albums.map((album) => (
              <Card
                key={album.id}
                image={album.image}
                title={album.title}
                follows={album.follows}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Section;
