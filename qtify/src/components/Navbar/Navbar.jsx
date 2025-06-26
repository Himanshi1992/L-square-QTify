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
    <Search placeholder="Search" searchData={searchData} />
  </div>
      <Button text="Give Feedback" />
    </nav>
  );
}

export default Navbar;
