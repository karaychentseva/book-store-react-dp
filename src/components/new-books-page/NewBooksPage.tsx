import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useSelector";
import { useTranslate } from "../../hooks/useTranslate";
import BookCardsListing from "../book-cards-listing/BookCardsListing";

type PropsType = {
}

const NewBooksPage: React.FC<PropsType> = () => {

    const { getNewBooks } = useActions();
    const data = useSelector(state => state.newBooks.data);
    const loading = useSelector(state => state.newBooks.loading);
    const error = useSelector(state => state.newBooks.error);
    const errorText = useSelector(state => state.newBooks.errorText);
    const t = useTranslate();
    useEffect(() => {
        getNewBooks();
    }, []);

    let title = `${t('new-books-page.newBooks')} (${loading ? t('loading') : data.total})`;

    if (error) {
        title = errorText;
    }

    return (
        <BookCardsListing title={title} books={data.books} />
    )
}

export default NewBooksPage;