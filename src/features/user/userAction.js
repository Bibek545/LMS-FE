import { fetchUserAPI } from "../user/userApi.js";
import { setUser } from "../user/userSlice.js";

export const fetchUserAction = () => async (dispatch) => {
  //call api
  const {status, payload} = await fetchUserAPI();

//   console.log(userInfo);
  //receivev the user

  //dispatch the user to redux store

  status === "success" && payload?._id && dispatch(setUser(payload));
};
