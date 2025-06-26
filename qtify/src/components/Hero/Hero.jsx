import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/hero_headphones.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1>100 Thousand Songs, ad-free</h1>
        <p>Over thousands podcast episodes</p>
      </div>
      <img
        src={heroImage}
        width={212}
        alt="headphones"
        className={styles.heroImage}
      />
    </div>
  );
}

export default Hero;