import { apiProcessor } from "../../services/api";

//CALL API PROCESSOR TO FETCH THE USER  
const apiBaseUrl = import.meta.env.VITE_BASE_API_URL;

const bookApiEP = apiBaseUrl + "/api/v1/books"

export const postNewBookAPI = async (payload) => {
    const obj = {
        url: bookApiEP ,
        method: "post",
        showToast: true,
        isPrivateCall: true,
        payload,
    };

    const result = await apiProcessor(obj);
  return result; //always return otherwise it will throw error in destructuring

};

export const updateBookAPI = async (payload) => {
    const obj = {
        url: bookApiEP ,
        method: "put",
        showToast: true,
        isPrivateCall: true,
        payload,
    };

    const result = await apiProcessor(obj);
  return result; //always return otherwise it will throw error in destructuring

};

export const deleteBookAPI = async (_id) => {
    const obj = {
        url: bookApiEP + "/" + _id ,
        method: "delete",
        showToast: true,
        isPrivateCall: true,
    };

    const result = await apiProcessor(obj);
  return result; //always return otherwise it will throw error in destructuring

};


export const adminFetchAllBooksApi = async () => {
    const obj = {
        url: bookApiEP + "/admin",
        method: "get",
        // showToast: true,
        isPrivateCall: true,
    };

    const result = await apiProcessor(obj);
  return result; //always return otherwise it will throw error in destructuring


};
