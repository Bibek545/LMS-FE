import { adminFetchAllBooksApi, fetchAllPublicBooksApi, fetchSinglePublicBooksApi, postNewBookAPI } from "./bookApi";
import { setBook, setPublicBook, setSelectedBook } from "../book/bookSlice.js";



export const postNewBookAction = async (payload) => {
  const book = await postNewBookAPI(payload);
  console.log(book);
};

export const adminFetchAllBookAction = () =>  async (dispatch) => {
  const {status, payload} = await adminFetchAllBooksApi();
  status === 'success' && dispatch(setBook(payload));
};

export const fetchAllPublicBooksAction = () =>  async (dispatch) => {
  const {status, payload} = await fetchAllPublicBooksApi();
  status === 'success' && dispatch(setPublicBook(payload));
};

export const fetchSinglePublicBooksAction = (slug) =>  async (dispatch) => {
  const {status, payload} = await fetchSinglePublicBooksApi(slug);
  status === 'success' && dispatch(setSelectedBook(payload));
};