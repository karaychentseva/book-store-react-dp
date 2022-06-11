import React from "react";
import { useSelector } from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import "./Navigation.scss";
import { useTranslate } from "../../../hooks/useTranslate";

type PropsType = {
}

const Header: React.FC<PropsType> = () => {

    const bookmarksCount = useSelector((state: any) => state.bookmarks.books.length);
    const t = useTranslate();
    return (
        <nav className="header-navigation-wrap">
            <ul className="header-navigation">
                <li className="header-navigation__item">
                    <SearchIcon className="navigation-icon" />
                    <a href="/search" className="header-navigation__item-link" >
                        <span className="link-text">
                            {t('navigation.search')}
                        </span>
                    </a>
                </li>
                <li className="header-navigation__item">
                    <BookmarksIcon className="navigation-icon" />
                    <a href="/bookmarks" className="header-navigation__item-link">
                        <span className="link-text">
                            {t('navigation.bookmarks')} ({bookmarksCount})
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Header;