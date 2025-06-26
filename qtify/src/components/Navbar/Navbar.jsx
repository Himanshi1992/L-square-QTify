import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
    <Link to="/">
      <Logo />
    </Link>
    <Search placeholder="search" searchData={searchData} />
  </div>
       <div className={styles.navbarRight}>
    <Button text="Give Feedback" />
  </div>
    </nav>
  );
}

export default Navbar;
