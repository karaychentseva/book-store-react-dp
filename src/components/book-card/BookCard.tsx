import React from "react";
import "./BookCard.scss";

type PropsType = {
}

const BookCard: React.FC<PropsType> = () => {

    return (
        <div className="book-card">
            <div className="book-card__img">
                <img src="https://itbook.store/img/books/9781491985571.png" className='book-card__img-item' />
            </div>
            <h4 className="book-card__title">Web Scraping with Python, 2nd Edition</h4>
            <p className="book-card__subtitle">Collecting More Data from the Modern Web</p>
            <div className="book-card__controls-row">
                <span className="book-card__price">$33.99</span>
            </div>
        </div>
    )
}

export default BookCard;