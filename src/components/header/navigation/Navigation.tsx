import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import "./Navigation.scss";

type PropsType = {
    
}

const Header: React.FC<PropsType> = () => {

    return (
        <nav className="header-navigation-wrap">
            <ul className="header-navigation">
                <li className="header-navigation__item">
                    <SearchIcon className="navigation-icon" />
                    <a href="#" className="header-navigation__item-link" >Search</a>
                </li>
                <li className="header-navigation__item">
                    <BookmarksIcon className="navigation-icon" />
                    <a href="#" className="header-navigation__item-link">Bookmarks</a>
                </li>
            </ul>
        </nav>
    )
}

export default Header;