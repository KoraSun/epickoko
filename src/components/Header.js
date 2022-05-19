import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Header.module.css"
export const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/history">History</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
};
