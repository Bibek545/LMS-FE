import React from 'react'

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { loginInputs } from '../../assets/customInputs/userLogInInputs.js';
import CustomInput from '../../components/customInput/CustomInput.jsx';
import useForm from '../../hooks/useForm.js';
import { signInUserApi } from '../../services/authAPI.jsx';

const initialState = {}
const SignInPage = () => {

  const {form, handleOnChange} = useForm(initialState);
  // console.log(form)
  
  const handleOnSubmit = async (e)=> {
    e.preventDefault();
    console.log(form)
  

  if(form.email && form.password) {
    const {payload} = await signInUserApi(form);

    sessionStorage.setItem('accessJWT', payload.accessJWT)
    localStorage.setItem("refreshJWT", payload.refreshJWT)
    // console.log(data);

    //getting user and redirecting to dashboard
  } else {
    alert('Both input must be filled.')
  }
  };

  return (
    <div className='login-page d-flex justify-content-center align-items-center'>

        <Form 
        onSubmit={handleOnSubmit} 
        style={{width: "450px"}} className='card login-card p-5 mt-5 shadow-lg mb-5'>
          <h1>Login to continue</h1>
          {
            loginInputs.map((input)=> (
              <CustomInput key = {input.name}{...input} onChange= {handleOnChange}/>))
      
          }
          <div className="py-3">

          </div>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <br />
          <div className='text-center'>
            Dont't have an account? <a href='/signup'>Signup</a> here
            </div>
        </Form>
    
    </div>
  )
}

export default SignInPage
