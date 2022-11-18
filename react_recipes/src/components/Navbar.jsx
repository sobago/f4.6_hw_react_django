import React from "react";
import { NavLink } from 'react-router-dom';
import Categories from "./Categories";
import './Navbar.css'

const Navbar = () => <>
    <header className="app-header">
    <nav className="navigation">
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/recipes">Рецепты</NavLink>
        <NavLink to="/api">API</NavLink>
    </nav>
    <nav className="navigation_category">
        <Categories/>
    </nav>
    </header>
</>

export default Navbar
