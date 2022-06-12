import { useNavigate } from "react-router-dom";
import React from "react";
import { ReactComponent as Logo } from "../../assets/book-open-reader-solid.svg";
import "./Header.scss";
import Navigation from "./navigation/Navigation";
import LangToggle from "./lang-toggle/LangToggle";
import { useTranslate } from "../../hooks/useTranslate";
import ThemeToggle from "./theme-toggle/ThemeToggle";

type PropsType = {
    
}

const Header: React.FC<PropsType> = () => {
    const navigate = useNavigate();
    const t = useTranslate();
    const handleHeaderClick = () => {
        navigate(`/books/`);
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header-wrap">
                    <div className="header-title" onClick={handleHeaderClick}>
                        <div className="header-title__logo">
                            <Logo className='header-title__logo-item'/>
                        </div>
                        <div className="header-title__text">
                            {t('title')}
                        </div>
                    </div>
                    <div className="header-right">
                        <Navigation />
                        <ThemeToggle />
                        <LangToggle />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;