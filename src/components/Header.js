import React, { useEffect, useState } from "react";
import { NavLink, Link, Navigate, useNavigate } from "react-router-dom";
import styles from "../styles/Header.module.css";
import { useStores } from "../stores";
import { observer } from "mobx-react";

export const Header = observer(() => {
  const { UserStore, AuthStore } = useStores();
  const navigate = useNavigate();
  const logoutHandle = () => {
    AuthStore.logout();
    navigate("/login");
  };
  return (
    <header>
      <nav className={styles.nav}>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/history">History</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        {UserStore.currentUser ? (
          <div>
            {UserStore.currentUser.attributes.username}
            <button onClick={logoutHandle}>Logout</button>
          </div>
        ) : (
          <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
});
