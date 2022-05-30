import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import "./BookDetailsPage.scss";
import { useSelector } from "../../hooks/useSelector";
import { useActions } from "../../hooks/useActions"
import { useEffect } from "react";
import { useParams } from "react-router-dom";

type PropsType = {
}

const BookDetailsPage: React.FC<PropsType> = () => {
    const { isbn13 } = useParams();
    const { fetchBook } = useActions();
    
    const data = useSelector(state  => state.book.data);
    const loading = useSelector(state  => state.book.loading);
    const error = useSelector(state  => state.book.error);

    useEffect(() => {
        fetchBook(isbn13 || '');
    }, []);

    const bookmarkedBooks = useSelector(state => state.bookmarks.books);
    const bookmarked = bookmarkedBooks.some(book => book.isbn13 === data.isbn13);

    const { addBookmark, removeBookmark } = useActions();

    const clickBookmark = () => {
        if (bookmarked) {
            removeBookmark(data.isbn13);
        }
        else {
            const bookCard = {
                isbn13: data.isbn13,
                image: data.image,
                title: data.title,
                subtitle: data.subtitle,
                price: data.price,
            };
            addBookmark(bookCard);
        }
    }

    return (
        <section className="book-page">
            <div className="container">
                <div className="details">
                    <div className="details-image">
                        <img src={data.image} />
                    </div>
                    <div className="details-info">
                        <div className="book-title">
                            <div className="titles">
                                <h2 className="book-title__main">{data.title}</h2>
                                <h4 className="book-title__secondary">{data.subtitle}</h4>
                            </div>
                            <div onClick={clickBookmark}>
                                {
                                    bookmarked
                                    ?
                                    <BookmarkRemoveIcon className="remove-bookmark-icon" />
                                    :
                                    <BookmarkAddIcon className="add-bookmark-icon" />
                                }
                            </div>
                        </div>
                        <div className="details-info__price">
                            {data.price}
                        </div>
                        <ul className="details-info-list">
                            <li className="details-info-item">
                                <span className="details-info-item__key">Authors</span>
                                <span className="details-info-item__value">{data.authors}</span>
                            </li>
                            <li className="details-info-item">
                                <span className="details-info-item__key">Publisher</span>
                                <span className="details-info-item__value">{data.publisher}</span>
                            </li>
                            <li className="details-info-item">
                                <span className="details-info-item__key">Pages</span>
                                <span className="details-info-item__value">{data.pages}</span>
                            </li>
                            <li className="details-info-item">
                                <span className="details-info-item__key">Year</span>
                                <span className="details-info-item__value">{data.year}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="description">
                    <p>{data.desc}</p>
                </div>
            </div>
        </section>
    )
}

export default BookDetailsPage;