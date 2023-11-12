import { useSelector } from "react-redux";
import "./BookList.scss";
import {
  selectBooks,
  selectSearchQuery,
} from "../../../store/slices/bookReducer";

const BookList = () => {
  const books = useSelector(selectBooks);
  const searchQuery = useSelector(selectSearchQuery);

  const filteredBooks = searchQuery
    ? books.filter(
        (book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div id="bookList">
      {searchQuery && (
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author}
            </li>
          ))}
        </ul>
      )}
      {!searchQuery && <p>Search for some books!</p>}
    </div>
  );
};

export default BookList;
