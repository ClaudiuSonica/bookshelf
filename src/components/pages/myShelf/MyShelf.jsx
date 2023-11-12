/* eslint-disable react/prop-types */
import Book from "../../molecules/book/Book";
import "./MyShelf.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeBook } from "../../../store/slices/bookReducer";

const MyShelf = () => {
  const books = useSelector((state) => state.library.books);

  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  }

  return (
    <div id="myShelf">
      <h1>My Shelf</h1>
      <div className="books-shelf">
        {books.map((book) => (
          <div className="books" key={book.id}>
            <Book
              title={book.title}
              author={book.author}
              year={book.year}
              rating={book.rating}
              bookId={book.id}
            />
            <button onClick={() => handleRemoveBook(book.id)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyShelf;
