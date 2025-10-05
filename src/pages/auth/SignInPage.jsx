import React, { useEffect, useRef } from "react";

import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { loginInputs } from "../../assets/customInputs/userLoginInputs.js";
import CustomInput from "../../components/customInput/CustomInput.jsx";
import useForm from "../../hooks/useForm.js";
import { signInUserApi } from "../../services/authAPI.jsx";
import { fetchUserAPI } from "../../features/user/userApi.js";
import {
  autoLoginUser,
  fetchUserAction,
} from "../../features/user/userAction.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useLocation } from "react-router-dom";

const initialState = {};
const SignInPage = () => {
  const { form, handleOnChange } = useForm(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showLoaderRef = useRef(true);
  const location = useLocation();
  console.log(location);
  // console.log(form)

  const { user } = useSelector((state) => state.userInfo);

  const path = location?.state?.from ?? "/user";

  useEffect(() => {
    user?._id ? navigate(path) : dispatch(autoLoginUser());
  }, 
  // [user?._id, navigate, dispatch]
);

  //this is to show spinner while loading to login page

  if (
    sessionStorage.getItem("accessJWT") ||
    localStorage.getItem("refreshJWT")
  ) {
    setTimeout(() => {
      showLoaderRef.current = false;
    }, 2000);
  } else {
    showLoaderRef.current = false;
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    if (form.email && form.password) {
      const { payload } = await signInUserApi(form);

      if (payload?.accessJWT) {
        //stroring accessJWT and refreshJWT in the session stprage and locak storage
        sessionStorage.setItem("accessJWT", payload.accessJWT);
        localStorage.setItem("refreshJWT", payload.refreshJWT);
        // console.log(data);

        //call api to get user profile
        dispatch(fetchUserAction());

        //getting user and redirecting to dashboard
      }
    } else {
      alert("Both input must be filled.");
    }
  };

  if (showLoaderRef.current) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <Form
        onSubmit={handleOnSubmit}
        style={{ width: "450px" }}
        className="card login-card p-5 mt-5 shadow-lg mb-5"
      >
        <h1>Login to continue</h1>
        {loginInputs.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}
        <div className="py-3"></div>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <div className="text-center">
          <p>Forgot Password? <Link to="/forgot-password">Reset Now</Link></p>
          <p>Dont't have an account? <Link to="/signup">Signup</Link> here</p>
          
        </div>
      </Form>
    </div>
  );
};

export default SignInPage;
