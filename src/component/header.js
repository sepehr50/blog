import React from 'react'
import NavigationButton from './pages/navigationButton';
import style from "./../styles/header.module.css"

const Header = ({ setPage, page }) => {
    return (
        <div>
            <nav>
                <ul className={style.navContainer}>
                    <NavigationButton isActive={page === "/"} name={"home"} onClick={() => setPage("/")} />
                    <NavigationButton isActive={page === "about"} name={"about"} onClick={() => setPage("about")} />
                    <NavigationButton isActive={page === "blog"} name={"blog"} onClick={() => setPage("blog")} />
                </ul>
            </nav>
        </div>
    )
}

export default Header;
