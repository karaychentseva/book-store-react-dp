import React, { useEffect, useState } from "react";
import BookCard from "../book-card/BookCard";
import { BookCardType } from "../../types/BookCardType";
import "./BooksPage.scss";

const newBooksUrl = "https://api.itbook.store/1.0/new";

type PropsType = {
}

const BooksPage: React.FC<PropsType> = () => {

    const [books, setBooks] = useState<BookCardType[]>([]);
    const [total, setTotal] = useState("Loading...");

    const fetchData = () => {
        fetch(newBooksUrl)
            .then((response) => response.json())
            .then((json) => {
                setBooks(json.books);
                setTotal(json.total);
            })
            .catch(() => {
                console.log("Error");
            })
            .finally(() => {
                console.log("Finish loading");
            });
    }

    useEffect(() => {
        setTimeout(fetchData, 1000);
    }, []);

    const newBooks = books.map(book => <BookCard key={book.isbn13} data={book} />);
    return (
        <section className="books-page">
            <div className="container">
                <h2 className="page-title">
                    New Books ({total})
                </h2>
                <div className="books-wrap">
                    {newBooks}
                </div>
            </div>
        </section>
    )
}

export default BooksPage;