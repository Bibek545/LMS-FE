import { apiProcessor } from "../../services/api";

//CALL API PROCESSOR TO FETCH THE USER
const apiBaseUrl = import.meta.env.VITE_BASE_API_URL;

const burrowApiEP = apiBaseUrl + "/api/v1/borrows";

export const postBurrowApi = async (payload) => {
  const obj = {
    url: burrowApiEP,
    method: "post",
    showToast: true,
    isPrivateCall: true,
    payload,
  };

  const result = await apiProcessor(obj);
  return result; //always return otherwise it will throw error in destructuring
};

// export const updateBookAPI = async (payload) => {
//   const obj = {
//     url: burrowApiEP,
//     method: "put",
//     showToast: true,
//     isPrivateCall: true,
//     payload,
//   };

//   const result = await apiProcessor(obj);
//   return result; //always return otherwise it will throw error in destructuring
// };

// export const deleteBookAPI = async (_id) => {
//   const obj = {
//     url: burrowApiEP + "/" + _id,
//     method: "delete",
//     showToast: true,
//     isPrivateCall: true,
//   };

//   const result = await apiProcessor(obj);
//   return result; //always return otherwise it will throw error in destructuring
// };

// export const adminFetchAllBooksApi = async () => {
//   const obj = {
//     url: burrowApiEP + "/admin",
//     method: "get",
//     // showToast: true,
//     isPrivateCall: true,
//   };

//   const result = await apiProcessor(obj);
//   return result; //always return otherwise it will throw error in destructuring
// };

// //for public

// export const fetchAllPublicBooksApi = async () => {
//   const obj = {
//     url: burrowApiEP,
//     method: "get",
//     // showToast: true,
//     // isPrivateCall: true,
//   };

//   const result = await apiProcessor(obj);
//   return result; //always return otherwise it will throw error in destructuring
// };

// export const fetchSinglePublicBooksApi = async (slug) => {
//   const obj = {
//     url: burrowApiEP + "/public/" + slug,
//     method: "get",

//   };

//   const result = await apiProcessor(obj);
//   return result; //always return otherwise it will throw error in destructuring
// };
