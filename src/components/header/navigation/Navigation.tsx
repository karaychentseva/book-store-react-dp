import React from "react";
import { useSelector } from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import "./Navigation.scss";
import { useTranslate } from "../../../hooks/useTranslate";
import { NavLink } from "react-router-dom";

type PropsType = {
}

const Header: React.FC<PropsType> = () => {

    const bookmarksCount = useSelector((state: any) => state.bookmarks.books.length);
    const t = useTranslate();
    return (
        <nav className="header-navigation-wrap">
            <ul className="header-navigation">
                <li className="header-navigation__item">
                    <NavLink
                        key="/search"
                        to="/search"
                        className={({ isActive }) => isActive ? "header-navigation__item-link _active" : "header-navigation__item-link"}
                    >
                        <SearchIcon className="navigation-icon" />
                        <span className="link-text">
                            {t('navigation.search')}
                        </span>
                    </NavLink>
                </li>
                <li className="header-navigation__item">
                    <NavLink
                        key="/bookmarks"
                        to="/bookmarks"
                        className={({ isActive }) => isActive ? "header-navigation__item-link _active" : "header-navigation__item-link"}
                    >
                        <BookmarksIcon className="navigation-icon" />
                        <span className="link-text">
                            {t('navigation.bookmarks')} ({bookmarksCount})
                        </span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header;