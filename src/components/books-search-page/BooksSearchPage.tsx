import React, { useEffect } from "react";
import BookCardsListing from "../book-cards-listing/BookCardsListing";
import { useSelector } from "../../hooks/useSelector";
import { useActions } from "../../hooks/useActions";
import SearchFilter from "./SearchFilter";

type PropsType = {
}

const BooksSearchPage: React.FC<PropsType> = () => {

    const filter = useSelector(state => state.searchBooks.filter);
    const data = useSelector(state => state.searchBooks.data);
    const { searchBooks } = useActions();

    useEffect(() => {
        searchBooks(filter);
    }, [filter.page]);

    const title = `Searched books (${data.total})`;
    return (
        <div>
            <SearchFilter />
            <BookCardsListing title={title} books={data.books} />
        </div>
        
    )
}

export default BooksSearchPage;