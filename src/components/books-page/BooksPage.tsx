import React from "react";
import BookCard from "../book-card/BookCard";
import "./BooksPage.scss";

type PropsType = {
}

const BooksPage: React.FC<PropsType> = () => {

    const data = {
        "total": "20",
        "books": [
            {
                "title": "Designing Across Senses",
                "subtitle": "A Multimodal Approach to Product Design",
                "isbn13": "9781491954249",
                "price": "$27.59",
                "image": "https://itbook.store/img/books/9781491954249.png",
                "url": "https://itbook.store/books/9781491954249"
            },
            {
                "title": "Web Scraping with Python, 2nd Edition",
                "subtitle": "Collecting More Data from the Modern Web",
                "isbn13": "9781491985571",
                "price": "$33.99",
                "image": "https://itbook.store/img/books/9781491985571.png",
                "url": "https://itbook.store/books/9781491985571"
            },
            {
                "title": "Programming iOS 11",
                "subtitle": "Dive Deep into Views, View Controllers, and Frameworks",
                "isbn13": "9781491999226",
                "price": "$59.17",
                "image": "https://itbook.store/img/books/9781491999226.png",
                "url": "https://itbook.store/books/9781491999226"
            },
            {
                "title": "Programming iOS 11",
                "subtitle": "Dive Deep into Views, View Controllers, and Frameworks",
                "isbn13": "97814919992262",
                "price": "$59.17",
                "image": "https://itbook.store/img/books/9781491999226.png",
                "url": "https://itbook.store/books/9781491999226"
            },
        ]
    };
    const newBooks = data.books.map(book => <BookCard key={book.isbn13} data={book} />);
    return (
        <section className="books-page">
            <div className="container">
                <h2 className="page-title">
                    New Books ({data.total})
                </h2>
                <div className="books-wrap">
                    {newBooks}
                </div>
            </div>
        </section>
    )
}

export default BooksPage;