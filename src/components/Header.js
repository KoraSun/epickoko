import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
export const Header = () => {
  const [isLogin, setIslogin] = useState(false);
  return (
    <header>
      <nav className={styles.nav}>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/history">History</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        {isLogin ? (
          <div>
            koko <button onClick={()=>{setIslogin(false)}} >Logout</button>
          </div>
        ) : (
          <div>
            <Link to="/login" onClick={()=>{}} >Login</Link>
            <Link  to="/register" onClick={()=>{}}>Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
};
