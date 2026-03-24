import { createSlice } from "@reduxjs/toolkit";

const initialState = {
modalShow: false,
modalContent: {
  title:"",
  content:"Form or the content will be here",
},
};

const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setModalShow: (state, action) => {
      state.modalShow = action.payload;
    },
        setModalContent: (state, action) => {
      state.modalContent = action.payload;
    },

  },
});

const { reducer, actions } = systemSlice;
export const { setModalShow , setModalContent } = actions;

export default reducer;
