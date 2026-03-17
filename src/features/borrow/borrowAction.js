import { toast } from "react-toastify";
import { fetchAllBorrowsApi, patchReturnBorrowApi } from "./borrowApi";
import { setAllBorrows, setMyBorrows } from "./borrowSlice";

export const getAllBorrowAction = (isAdmin) => async (dispatch)=> {
    const pending = fetchAllBorrowsApi(isAdmin);
    toast.promise(pending,{
        pending: "Fetching all borrows...",
    });
    const {status, payload, message} = await pending;
    console.log(status, payload, message)
    isAdmin ? dispatch(setAllBorrows(payload)) : dispatch(setMyBorrows(payload));
};
export const returnBorrowAction = (payload) => async (dispatch)=> {
    const pending = patchReturnBorrowApi(payload);
    toast.promise(pending,{
        pending: "Fetching all borrows...",
    });
    const {status,message} = await pending;
    toast[status](message);
    status === "success" && dispatch(getAllBorrowAction());
};