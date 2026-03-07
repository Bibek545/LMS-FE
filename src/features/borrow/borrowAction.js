import { toast } from "react-toastify";
import { fetchAllBorrowsApi } from "./borrowApi";
import { setAllBorrows } from "./borrowSlice";

export const getAllBorrowAction = () => async (dispatch)=> {
    const pending = await fetchAllBorrowsApi();
    // toast.promise({
    //     pending: "Fetching all borrows...",
    // });
    const {status, payload, message} = await pending;
    console.log(status, payload, message)
    dispatch(setAllBorrows(payload));
};