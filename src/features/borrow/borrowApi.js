import { apiProcessor } from "../../services/api";

//CALL API PROCESSOR TO FETCH THE USER
const apiBaseUrl = import.meta.env.VITE_BASE_API_URL;

const borrowApiEP = apiBaseUrl + "/api/v1/borrows";

export const fetchAllBorrowsApi = async (isAdmin) => {
  const path = isAdmin ? "/admin" : "/user";
  const obj = {
    url: borrowApiEP + path,
    method: "get",
    // showToast: true,
    isPrivateCall: true,
  };

  const result = await apiProcessor(obj);
  return result; //always return otherwise it will throw error in destructuring
};
