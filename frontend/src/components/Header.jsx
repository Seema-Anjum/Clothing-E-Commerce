import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Clothing Store</h1>

      <nav className="header-nav">
        <NavLink
          to="/" 
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Products
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Cart
        </NavLink>
      </nav>
    </header>
  );
}
