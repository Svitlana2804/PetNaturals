import Logo from "../../../assets/header_logo-1.webp";
import Sky from "../../../assets/noonespillow_Simple_Cloud-2.webp";
import "../../../css/Header.scss";
import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("Menu toggled:", !menuOpen);
  };

  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="logo" />
      <img className="header__sky" src={Sky} alt="sky" />
      <button className="burger-menu" onClick={toggleMenu}>
        &#9776;
      </button>
      <nav className={menuOpen ? "nav open" : "nav"}>
        <a href="#section1">Order</a>
        <a href="#section2">About</a>
        <a href="#section3">Result</a>
      </nav>
    </div>
  );
}
