import React from "react";
import BookCardsListing from "../book-cards-listing/BookCardsListing";
import { useSelector } from "../../hooks/useSelector";
import SearchFilter from "./SearchFilter";

type PropsType = {
}

const BooksSearchPage: React.FC<PropsType> = () => {

    const data = useSelector(state => state.searchBooks.data);
    const loading = useSelector(state => state.searchBooks.loading);
    const error = useSelector(state => state.searchBooks.error);
    const errorText = useSelector(state => state.searchBooks.errorText);
    let title = `Searched books (${loading ? "Loading..." : data.total})`;

    if (error) {
        title = errorText;
    }

    return (
        <div className="search-page">
            <SearchFilter />
            <BookCardsListing title={title} books={data.books} />
        </div>
    )
}

export default BooksSearchPage;