import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./slices/bookReducer";

export const store = configureStore({
  reducer: {
    library: bookSlice,
  },
});
