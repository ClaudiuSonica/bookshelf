import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "library",
  initialState: {
    books: [],
    searchQuery: "",
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    }
  },
});

export const { addBook, removeBook, setSearchQuery } = bookSlice.actions;
export const selectBooks = (state) => state.library.books;
export const selectSearchQuery = (state) => state.library.searchQuery;

export default bookSlice.reducer;
