import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import CustomInput from "../../components/customInput/CustomInput.jsx";
import useForm from "../../hooks/useForm.js";

const initialState = {};

const ForgetPasswordPage = () => {
  const emailRef = useRef("");
  const [showPassResetForm, setShowPassResetForm] = useState(false);

  const { form, passwordErrors, handleOnChange } =
    useForm(initialState);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
      console.log(email);
  };
  // console.log((form))

const handleOnPasswordResetSubmit = (e)=> {
  e.preventDefault();
  console.log((form))
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
              <Button type="submit">Request OTP</Button>
            </div>
          </Form>

          {
            showPassResetForm && <>
                       <hr />

          {/* show this form once the OTP is requested */}

          <div>
            <Alert variant="success">
              {" "}
              We have sent OTP in your email. Please check your email and check
              junk/spam if you dont see the email.
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
                <Button type="submit" disabled={passwordErrors.length }>Reset Password</Button>
              </div>
            </Form>
          </div>
            </>
          }



          <div className="text-end my-3 text-center">
            Ready to login? <a href="/login">Login Now</a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ForgetPasswordPage;
