import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [], //for admin purpose
  publicBooks: [],
  selectedBook: {},
  cart: [],
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
        setCart: (state, { payload }) => {
          // TODO
      state.cart = [...state.cart, payload];
    },
            removeBookFromCart: (state, { payload }) => {
          // TODO
          state.cart.filter((book) => book._id) !== payload
      state.cart = state.cart.filter((book)=> book._id !== payload);
    },
  },
});

const { reducer, actions } = bookSlice;
export const { setBook, setPublicBook, setSelectedBook, setCart, removeBookFromCart } = actions;

export default reducer;
