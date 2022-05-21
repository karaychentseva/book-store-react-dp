import React from "react";
import "./Navigation.scss";

type PropsType = {
    
}

const Header: React.FC<PropsType> = () => {

    return (
        <nav className="header-navigation-wrap">
            <ul className="header-navigation">
                <li className="header-navigation__item">
                    <a href="#" className="header-navigation__item-link" >Search</a>
                </li>
                <li className="header-navigation__item">
                    <a href="#" className="header-navigation__item-link">Bookmarks</a>
                </li>
            </ul>
        </nav>
    )
}

export default Header;