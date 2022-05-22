import React from "react";
import { useNavigate } from "react-router-dom";
import { BookCardType } from "../../types/BookCardType";
import "./BookCard.scss";

type PropsType = {
    data: BookCardType
}

const BookCard: React.FC<PropsType> = ({data}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/books/${data.isbn13}`);
    }

    return (
        <div className="book-card" onClick={handleClick}>
            <div className="book-card__img">
                <img src={data.image} className='book-card__img-item' />
            </div>
            <h4 className="book-card__title">{data.title}</h4>
            <p className="book-card__subtitle">{data.subtitle}</p>
            <div className="book-card__controls-row">
                <span className="book-card__price">{data.price}</span>
            </div>
        </div>
    )
}

export default BookCard;