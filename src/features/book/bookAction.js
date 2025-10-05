import { adminFetchAllBooksApi, postNewBookAPI } from "./bookApi";
import { setBook } from "../book/bookSlice.js";



export const postNewBookAction = async (payload) => {
  const book = await postNewBookAPI(payload);
  console.log(book);
};

export const adminFetchAllBookAction = () =>  async (dispatch) => {
  const {status, payload} = await adminFetchAllBooksApi();
  status === 'success' && dispatch(setBook(payload));
};