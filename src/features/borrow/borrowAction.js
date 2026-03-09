import { toast } from "react-toastify";
import { fetchAllBorrowsApi } from "./borrowApi";
import { setAllBorrows, setMyBorrows } from "./borrowSlice";

export const getAllBorrowAction = (isAdmin) => async (dispatch)=> {
    const pending = await fetchAllBorrowsApi(isAdmin);
    // toast.promise({
    //     pending: "Fetching all borrows...",
    // });
    const {status, payload, message} = await pending;
    console.log(status, payload, message)
    isAdmin ? dispatch(setAllBorrows(payload)) : dispatch(setMyBorrows(payload));
};