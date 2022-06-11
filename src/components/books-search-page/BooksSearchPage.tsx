import React from "react";
import BookCardsListing from "../book-cards-listing/BookCardsListing";
import { useSelector } from "../../hooks/useSelector";
import SearchFilter from "./SearchFilter";
import { useTranslate } from "../../hooks/useTranslate";

type PropsType = {
}

const BooksSearchPage: React.FC<PropsType> = () => {

    const data = useSelector(state => state.searchBooks.data);
    const total = useSelector(state => state.searchBooks.pageTotal);
    const loading = useSelector(state => state.searchBooks.loading);
    const error = useSelector(state => state.searchBooks.error);
    const errorText = useSelector(state => state.searchBooks.errorText);
    
    const t = useTranslate();
    let title = `${t('books-search-page.found')} (${loading ? t('loading') : total})`;

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