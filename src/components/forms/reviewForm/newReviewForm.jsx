import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../../customInput/CustomInput";
import useForm from "../../../hooks/useForm";
import { reviewInputes } from "../../../assets/customInputs/reviewInputes";

const initialState = {};
const NewReviewForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form)
  };
  return (
    <div className="p-4">
      {/* <h3>Leave your Review</h3> */}
      <Form className="m-2" onSubmit={handleOnSubmit}>
        {reviewInputes.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}
        <div className="d-grid">
          <Button type="submit">Submit your Review</Button>
        </div>
      </Form>
    </div>
  );
};

export default NewReviewForm;
