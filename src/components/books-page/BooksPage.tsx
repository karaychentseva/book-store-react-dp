import React from "react";
import BookCard from "../book-card/BookCard";
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
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </div>
            </div>
        </section>
    )
}

export default BooksPage;