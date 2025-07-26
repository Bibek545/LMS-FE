import { apiProcessor } from "../../services/api";

const apiBaseUrl = "http://localhost:8000"
const userApiEP = apiBaseUrl + "/api/v1/users"


//CALL API PROCESSOR TO FETCH THE USER  
export const fetchUserAPI = async() => {
    const obj = {
        url: userApiEP + '/profile',
        method: "get",
        showToast: false,
        isPrivateCall: true,
    };

    const result = await apiProcessor(obj);
  return result; //always return otherwise it will throw error in destructuring


}