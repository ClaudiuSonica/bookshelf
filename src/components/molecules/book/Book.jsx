/* eslint-disable react/prop-types */
import "./Book.scss";

const Book = ({ title, author, year, rating }) => {
  return (
    <div className="book-info">
      <h2 className="book-info_title">{title}</h2>
      <p className="book-info_author">
        {author},
        <span className="book-info_year">{year}</span>
      </p>

      <div className="book-info_rating">
        <p><span>{rating}</span>/5</p>
      </div>
    </div>
  );
};

export default Book;
