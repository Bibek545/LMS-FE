import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allBorrows: [], //admint to see
  myBorrows: [], //client to see
};

const borrowSlice = createSlice({
  name: "borrow",
  initialState,
  reducers: {
    setAllBorrows: (state, action) => {
      state.allBorrows = action.payload;
    },
        setMyBorrows: (state, action) => {
      state.myBorrows = action.payload;
    },
  },
});

const { reducer, actions } = borrowSlice;
export const { setAllBorrows, setMyBorrows } = actions;

export default reducer;
