import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function Section({ title, endpoint, showCollapse = true, isSongSection = false }) {
  const [items, setItems] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    axios
      .get(endpoint)
      .then((res) => {
        setItems(res.data);
        console.log(`${title} API Response:`, res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch data:", err);
      });

    if (isSongSection) {
      axios
        .get("https://qtify-backend-labs.crio.do/genres")
        .then((res) => setGenres(res.data.data))
        .catch((err) => console.error("Failed to fetch genres:", err));
    }
  }, [endpoint, isSongSection]);

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  const filteredItems =
    isSongSection && selectedGenre !== "All"
      ? items.filter((item) => item.genre.key === selectedGenre)
      : items;

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3>{title}</h3>
        {!isSongSection && showCollapse && (
          <button className={styles.collapseBtn} onClick={toggleCollapse}>
            {isCollapsed ? "Show All" : "Collapse"}
          </button>
        )}
      </div>

      {isSongSection && (
        <Tabs
          value={selectedGenre}
          onChange={(e, newValue) => setSelectedGenre(newValue)}
          textColor="inherit"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          <Tab value="All" label="All" />
          {genres.map((genre) => (
            <Tab key={genre.key} value={genre.key} label={genre.label} />
          ))}
        </Tabs>
      )}

      <div className={styles.sliderContainer}>
        {(!isSongSection && isCollapsed) || isSongSection ? (
          <Carousel>
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                follows={item.follows}
                likes={item.likes}
                type={isSongSection ? "song" : "album"}
              />
            ))}
          </Carousel>
        ) : (
          <div className={styles.cardGrid}>
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                follows={item.follows}
                likes={item.likes}
                type="album"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Section;
