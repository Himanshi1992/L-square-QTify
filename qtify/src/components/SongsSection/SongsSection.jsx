import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../Section/Section.module.css";
import { Tabs, Tab } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

const genreApi = "https://qtify-backend-labs.crio.do/genres";
const songApi = "https://qtify-backend-labs.crio.do/songs";

function SongsSection() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    axios.get(songApi).then((res) => setSongs(res.data));
    axios.get(genreApi).then((res) => setGenres([{ label: "All", key: "all" }, ...res.data.data]));
  }, []);

  const handleChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3>Songs</h3>
      </div>

      <Tabs
        value={selectedGenre}
        onChange={handleChange}
        textColor="inherit"
        TabIndicatorProps={{ style: { backgroundColor: "var(--primary-green)" } }}
        sx={{
          color: "white",
          marginBottom: "16px",
          "& .MuiTab-root": {
            fontFamily: "Poppins",
            fontSize: "14px",
            textTransform: "capitalize",
            color: "white",
            minWidth: 0,
            padding: "6px 16px",
          },
          "& .Mui-selected": {
            color: "var(--primary-green)",
            fontWeight: 600,
          },
        }}
      >
        {genres.map((genre) => (
          <Tab key={genre.key} label={genre.label} value={genre.key} />
        ))}
      </Tabs>

      <div className={styles.sliderContainer}>
        <Carousel>
          {filteredSongs.map((song) => (
            <Card
              key={song.id}
              image={song.image}
              title={song.title}
              follows={song.likes} // ✅ Use `likes` for songs per milestone spec
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default SongsSection;
