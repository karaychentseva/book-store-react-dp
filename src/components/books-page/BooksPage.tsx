import React, { useEffect, useState } from "react";
import { BookCardType } from "../../types/BookCardType";
import BookCardsListing from "../book-cards-listing/BookCardsListing";

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

    const title = `New books (${total})`;

    return (
        <BookCardsListing title={title} books={books} />
    )
}

export default BooksPage;