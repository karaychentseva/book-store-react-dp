import React from "react";
import "./BooksPage.scss";

type PropsType = {
}

const BooksPage: React.FC<PropsType> = () => {

    return (
        <section className="books-page">
            <div className="container">
                <h2 className="page-title">
                    New Books
                </h2>
                <div className="books-wrap">
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
                    <div className="book-card">
                        <div className="book-card__img">
                            <img src="https://itbook.store/img/books/9781491954249.png" className='book-card__img-item' />
                        </div>
                        <h4 className="book-card__title">Web Scraping with Python, 2nd Edition</h4>
                        <p className="book-card__subtitle">Collecting More Data from the Modern Web</p>
                        <div className="book-card__controls-row">
                            <span className="book-card__price">$33.99</span>
                        </div>
                    </div>
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
                </div>
            </div>
        </section>
    )
}

export default BooksPage;