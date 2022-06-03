import BookCard from "../book-card/BookCard";
import "./BookCardsListing.scss";
import { BookCardType } from "../../types/BookCardType";

type PropsType = {
    title: string,
    books: BookCardType[]
}

const BookCardsListing: React.FC<PropsType> = ({title, books}) => {

    const bookCards = books.map(book => <BookCard key={book.isbn13} data={book} />);
    return (
        <section className="books-page">
            <div className="container">
                <h2 className="page-title">
                    {title}
                </h2>
                <div className="books-wrap">
                    {bookCards}
                </div>
            </div>
        </section>
    )
}

export default BookCardsListing;