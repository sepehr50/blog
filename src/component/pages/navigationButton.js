import React from 'react'
import style from "./../../styles/header.module.css"

const NavigationButton = ({ name, onClick, isActive }) => {
    return (
        <li>
            <button className={isActive ? style.active : ""} onClick={onClick}>{name}</button>
        </li>
    )
}

export default NavigationButton
