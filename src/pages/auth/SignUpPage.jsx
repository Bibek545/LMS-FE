import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "../../components/customInput/CustomInput.jsx";
import { singUpINputes } from "../../assets/customInputs/userSignUpInputs.js";
import useForm from "../../hooks/useForm.js";
import { signUpNewUserApi } from "../../services/authAPI.jsx";


const initialState = {}
const SignUpPage = () => {
   const {form, setForm, handleOnChange, passwordErrors } = useForm(initialState);
  //  console.log(form);


  const handleOnSubmit = async (e)=> {
      e.preventDefault();
      console.log(form);


    const {confirmPassword, ...rest} = form
    if(confirmPassword!==rest.password) return alert("Password does not match")
      const result = await signUpNewUserApi(rest);
    console.log(result);
  } 
  console.log(passwordErrors);
  return ( 
    <div className="d-flex justify-content-center">

        <Form 
        onSubmit = {handleOnSubmit}
        style={{ width: "450px"}} className="card p-5 mt-5 shadow-lg mb-5">
          <h1>Join our Library Community</h1>
           {
            singUpINputes.map((input)=> (  
            <CustomInput key = {input.name} {...input} onChange = {handleOnChange}/>))
           }
            <div className="py-3">
              <ul className="text-danger">
                {
                  passwordErrors.length > 0 && passwordErrors.map((msg)=>   <li key = {msg}>{msg} </li>)
                }
             
              </ul>
            </div>
          <Button variant="primary" type="submit" disabled={passwordErrors.length}>
            Submit
          </Button>
        </Form>
    </div>
  );
};
export default SignUpPage;
