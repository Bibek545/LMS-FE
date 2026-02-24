import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  recentBurrow: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, { payload }) => {
      // TODO
      state.cart = [...state.cart, payload];
    },
    resetCart: (state) => {
      // TODO
      state.cart = [];
    },
    setRecentBurrow: (state, { payload }) => {
      state.recentBurrow = payload;
    },
    resetRecentBurrowCart: (state) => {
      // TODO
      state.recentBurrow = [];
    },
    removeBookFromCart: (state, { payload }) => {
      // TODO
      state.cart.filter((book) => book._id) !== payload;
      state.cart = state.cart.filter((book) => book._id !== payload);
    },
  },
});

const { reducer, actions } = cartSlice;
export const {
  setCart,
  removeBookFromCart,
  resetCart,
  setRecentBurrow,
  resetRecentBurrowCart,
} = actions;

export default reducer;
