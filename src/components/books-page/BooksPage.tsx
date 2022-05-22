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
                    <BookCard
                        title="Designing Across Senses"
                        subtitle="A Multimodal Approach to Product Desig"
                        price="$27.59"
                        img="https://itbook.store/img/books/9781491954249.png"
                    />
                    <BookCard
                        title="Web Scraping with Python, 2nd Edition"
                        subtitle="Collecting More Data from the Modern Web"
                        price="$33.9"
                        img="https://itbook.store/img/books/9781491985571.png"
                    />
                    <BookCard
                        title="Programming iOS 11"
                        subtitle="Dive Deep into Views, View Controllers, and Frameworks"
                        price="$59.17"
                        img="https://itbook.store/img/books/9781491999226.png"
                    />
                    <BookCard
                        title="Microsoft Excel Inside Out"
                        subtitle="Office 2021 and Microsoft 365"
                        price="$42.16"
                        img="https://itbook.store/img/books/9780137559534.png"
                    />
                </div>
            </div>
        </section>
    )
}

export default BooksPage;