import { useDispatch, useSelector } from "react-redux";
import "./Search.scss";
import { setSearchQuery } from "../../../store/slices/bookReducer";
import BookList from "../../atoms/bookList/BookList";

const Search = () => {

  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.library.searchQuery);

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  }

  return (
    <div id="search">
      <h1>Search</h1>
      <div className="search-input">
        <input
          type="text"
          name="search"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <BookList />
    </div>
  );
};

export default Search;
