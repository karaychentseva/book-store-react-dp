import { BookDetailsType } from "../../types/BookDetailsType";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import "./BookDetailsPage.scss";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions"

type PropsType = {
}

const BookDetailsPage: React.FC<PropsType> = () => {
    const data = {
        "error": "0",
        "title": "Securing DevOps",
        "subtitle": "Security in the Cloud",
        "authors": "Julien Vehent",
        "publisher": "Manning",
        "isbn10": "1617294136",
        "isbn13": "9781617294136",
        "pages": "384",
        "year": "2018",
        "rating": "5",
        "desc": "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
        "price": "$26.98",
        "image": "https://itbook.store/img/books/9781617294136.png",
        "url": "https://itbook.store/books/9781617294136",
        "pdf": {
                  "Chapter 2": "https://itbook.store/files/9781617294136/chapter2.pdf",
                  "Chapter 5": "https://itbook.store/files/9781617294136/chapter5.pdf"
               }
    };

    const bookmarkedBooks = useSelector((state: any) => state.bookmarks.books);
    const bookmarked = bookmarkedBooks.includes(data.isbn13);

    const { addBookmark, removeBookmark } = useActions();

    const clickBookmark = () => {
        if (bookmarked) {
            removeBookmark(data.isbn13);
        }
        else {
            addBookmark(data.isbn13);
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