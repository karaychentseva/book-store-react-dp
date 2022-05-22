import React from "react";
import "./BookCard.scss";

type PropsType = {
    img: string,
    title: string,
    subtitle: string,
    price: string
}

const BookCard: React.FC<PropsType> = ({img, title, subtitle, price}) => {

    return (
        <div className="book-card">
            <div className="book-card__img">
                <img src={img} className='book-card__img-item' />
            </div>
            <h4 className="book-card__title">{title}</h4>
            <p className="book-card__subtitle">{subtitle}</p>
            <div className="book-card__controls-row">
                <span className="book-card__price">{price}</span>
            </div>
        </div>
    )
}

export default BookCard;