import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, Card, Form, Spinner } from "react-bootstrap";
import CustomInput from "../../components/customInput/CustomInput.jsx";
import useForm from "../../hooks/useForm.js";
import { requestPassResetOTPApi } from "../../services/authAPI.jsx";

const initialState = {};
const timToRequestOtpAgain = 30;

const ForgetPasswordPage = () => {
  const emailRef = useRef("");
  const [showPassResetForm, setShowPassResetForm] = useState(false); // this is to show the second part of the form
  const [isOtpPending, setOtpPending] = useState(false); //this is for the spinner
  const [isOtpBtnDisabled, setOtpBtnDisabled] = useState(false); //this is to disable the button

  const [counter, setCounter] = useState(0); // this is to show the counter in button

  const { form, passwordErrors, handleOnChange } = useForm(initialState);

  useEffect(()=> {
  if(counter > 0) {
    const timer = setInterval(()=>{
    setCounter(counter - 1);
    }, 1000);
    return ()=>  clearInterval(timer);
  
  } else {
      setOtpBtnDisabled(false);
    }
  }, [counter])

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    // call api

    setOtpPending(true);
    setOtpBtnDisabled(true);
    const response = await requestPassResetOTPApi({ email });
    console.log(response);

    if (response?.status === "success") {
      setShowPassResetForm(true);
    }
    setOtpPending(false);
    // setOtpBtnDisabled(false);
    setCounter(timToRequestOtpAgain);
  };
  // console.log((form))

  const handleOnPasswordResetSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div className="forgot-password d-flex justify-content-center align-items-center">
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>Forgot your password</Card.Title>
          <p>Enter your email to get the OPT link to reset your password.</p>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              required
              placeholder="your email@.com"
              passRef={emailRef}
            />

            <div className="d-grid">
              <Button type="submit" disabled={isOtpBtnDisabled}>
                {isOtpPending ? (
                  <Spinner variant="border" />
                ) : counter > 0 ? (
                  `Request OTP in ${counter}`
                ) : (
                  "Request OTP"
                )}
              </Button>
            </div>
          </Form>

          {showPassResetForm && (
            <>
              <hr />

              {/* show this form once the OTP is requested */}

              <div>
                <Alert variant="success">
                  {" "}
                  We have sent OTP in your email. Please check your email and
                  check junk/spam if you dont see the email.
                </Alert>
                <Form onSubmit={handleOnPasswordResetSubmit}>
                  <CustomInput
                    label="OTP"
                    name="otp"
                    type="number"
                    required
                    placeholder="0000"
                    onChange={handleOnChange}
                  />
                  <CustomInput
                    label="Password"
                    name="password"
                    type="password"
                    required
                    placeholder="xxxxxx"
                    onChange={handleOnChange}
                  />
                  <CustomInput
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    required
                    placeholder="xxxxxx"
                    onChange={handleOnChange}
                  />
                  <div className="py-3">
                    <ul className="text-danger">
                      {passwordErrors.length > 0 &&
                        passwordErrors.map((msg) => <li key={msg}>{msg} </li>)}
                    </ul>
                  </div>

                  <div className="d-grid">
                    <Button type="submit" disabled={passwordErrors.length}>
                      Reset Password
                    </Button>
                  </div>
                </Form>
              </div>
            </>
          )}

          <div className="text-end my-3 text-center">
            Ready to login? <a href="/login">Login Now</a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ForgetPasswordPage;
