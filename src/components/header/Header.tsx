import { useNavigate } from "react-router-dom";
import React from "react";
import { ReactComponent as Logo } from "../../assets/book-open-reader-solid.svg";
import "./Header.scss";
import Navigation from "./navigation/Navigation";
import LangToggle from "./lang-toggle/LangToggle";

type PropsType = {
    
}

const Header: React.FC<PropsType> = () => {
    const navigate = useNavigate();
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
                            IT-Book Store
                        </div>
                    </div>
                    <div className="header-right">
                        <Navigation />
                        <LangToggle />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;