import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from "./pages/Header.module.css"

function Header() {
    return (
        <div className={s.LinksBar}>
            <ul>
                <li> <NavLink to='/pre-junior'> pre-Junior </NavLink> </li>
                <li> <NavLink to="/junior"> Junior </NavLink > </li>
                <li> <NavLink to="/juniorPlus"> JuniorPlus </NavLink> </li>
            </ul>


        </div>
    )
}

export default Header
