// all API call related to signup , login , token 

import { apiProcessor } from "./api"

const apiBaseUrl = "http://localhost:8000"
const authApiEP = apiBaseUrl + "/api/v1/auth"

export const signUpNewUserApi =  async (payload) => {
    const obj = {
        url: authApiEP + '/register', 
        method: "post",
        payload,
    }

    const result = await apiProcessor(obj);
    console.log(result);
    
};
