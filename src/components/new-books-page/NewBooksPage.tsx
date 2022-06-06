import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useSelector";
import BookCardsListing from "../book-cards-listing/BookCardsListing";

type PropsType = {
}

const NewBooksPage: React.FC<PropsType> = () => {

    const { getNewBooks } = useActions();
    const data = useSelector(state => state.newBooks.data);
    const loading = useSelector(state => state.newBooks.loading);
    const error = useSelector(state => state.newBooks.error);
    const errorText = useSelector(state => state.newBooks.errorText);

    useEffect(() => {
        getNewBooks('');
    }, []);

    let title = `New books (${loading ? "Loading..." : data.total})`;

    if (error) {
        title = errorText;
    }

    return (
        <BookCardsListing title={title} books={data.books} />
    )
}

export default NewBooksPage;