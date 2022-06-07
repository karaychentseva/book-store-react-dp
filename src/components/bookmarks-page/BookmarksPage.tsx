import { useSelector } from "../../hooks/useSelector";
import { useTranslate } from "../../hooks/useTranslate";
import BookCardsListing from "../book-cards-listing/BookCardsListing";

type PropsType = {
}

const BookmarksPage: React.FC<PropsType> = () => {

    const bookmarkedBooks = useSelector(state => state.bookmarks.books);
    const t = useTranslate();
    const title = `${t('bookmarks-page.title')} (${bookmarkedBooks.length})`
    return (
        <BookCardsListing title={title} books={bookmarkedBooks} />
    )
}

export default BookmarksPage;
