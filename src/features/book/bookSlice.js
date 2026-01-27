import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [], //for admin purpose
  publicBooks: [],
  selectedBook: {},
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBook: (state, action) => {
      state.books = action.payload;
    },
    setPublicBook: (state, action) => {
      state.publicBooks = action.payload;
    },
    setSelectedBook: (state, { payload }) => {
      state.selectedBook = payload || {};
    },
  },
});

const { reducer, actions } = bookSlice;
export const { setBook, setPublicBook, setSelectedBook } = actions;

export default reducer;
