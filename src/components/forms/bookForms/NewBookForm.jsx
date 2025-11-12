import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../../customInput/CustomInput";
import { newBookInputes } from "../../../assets/customInputs/bookInputes";
import useForm from "../../../hooks/useForm";
import { postNewBookAction } from "../../../features/book/bookAction";

const initialState = {};
const NewBookForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);
  const [image, setImage] = useState();

  const handleOnImageSelect = (e) => {
    // console.log(e);
    setImage(e.target.files[0]);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    console.log(form);
    for (const key in form) {
      // console.log(key, form[key]);
      formData.append(key, form[key]);
    }
    formData.append("image", image);
    postNewBookAction(formData);
    // console.log(form);
  };
  return (
    <div className="p-4">
      <h3>Insert new book details below</h3>
      <Form className="m-2" onSubmit={handleOnSubmit}>
        {newBookInputes.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}

        <Form.Group className="mb-3">
          <Form.Control
            onChange={handleOnImageSelect}
            type="file"
            name="image"
            required
          ></Form.Control>
        </Form.Group>

        <div className="d-grid">
          <Button type="submit">Add New Book</Button>
        </div>
      </Form>
    </div>
  );
};

export default NewBookForm;
