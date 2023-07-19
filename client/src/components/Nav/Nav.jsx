import React from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import handleSearch from "../Home/Home.jsx";

const Nav = () => {
  const history = useHistory();
  const handleRedirect = () => {
    history.push("/home");
    window.location.reload()
  };
  return (
    <nav >
      <div className={styles.nav}>
        <Link to="/">
          <button className={styles.link}>Landing</button>
        </Link>
        <Link to="/home">
          <button className={styles.link} onClick={handleRedirect}>
            Home
          </button>
        </Link>
        <Link to="/form">
          <button className={styles.link}>Crear un nuevo perro</button>
        </Link>
        <SearchBar className={styles.SearchBar} onSearch={handleSearch} />
      </div>
    </nav>
  );
};

export default Nav;
