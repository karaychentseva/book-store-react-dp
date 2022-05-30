import { useSelector } from "../../hooks/useSelector";
import BookCardsListing from "../book-cards-listing/BookCardsListing";

type PropsType = {
}

const BookmarksPage: React.FC<PropsType> = () => {

    const bookmarkedBooks = useSelector(state => state.bookmarks.books);

    const title = `Bookmarks (${bookmarkedBooks.length})`
    return (
        <BookCardsListing title={title} books={bookmarkedBooks} />
    )
}

export default BookmarksPage;
