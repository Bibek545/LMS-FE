import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../../customInput/CustomInput";
import { editBookInputes } from "../../../assets/customInputs/bookInputes";
import useForm from "../../../hooks/useForm";
import { postNewBookAction } from "../../../features/book/bookAction";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { updateBookAPI } from "../../../features/book/bookApi";

const initialState = {};
const EditBookForm = () => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const { form, setForm, handleOnChange } = useForm(initialState);
  const { books } = useSelector((state) => state.bookInfo);
  // console.log(books);

  //    console.log(selectedBook);
  useEffect(() => {
    if (_id !== form._id) {
      const selectedBook = books.find((book) => book._id === _id);
      selectedBook?._id ? setForm(selectedBook) : navigate("/user/books");
      //   setForm(selectedBook);
    }
  }, [setForm]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const {
      addedBy,
      createdAt,
      lastUpdatedBy,
      slug,
      updatedAt,
      __v,
      isbn,
      ...rest
    } = form;
    console.log(rest);

    const result = await updateBookAPI(rest);
    console.log(result);
    
  };
  console.log(form);
  return (
    <div className="p-4">
      <h3>Edit book details below</h3>
      <Form className="m-2" onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Check
            name="status"
            type="switch"
            id="custom-switch"
            label={form.status}
            onChange={handleOnChange}
            checked={form.status === "active"}
          />
        </Form.Group>

        {editBookInputes.map((input) => (
          <CustomInput
            key={input.name}
            {...input}
            onChange={handleOnChange}
            value={form[input.name] ?? ""}
          />
        ))}
        {form.thumbnail && (
          <div className="text-center my-3">
            <h6>Thumbnail Preview:</h6>
            <img
              src={form.thumbnail}
              alt="Book Thumbnail"
              style={{
                width: "150px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "6px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        )}

        {/* NEEDS FIXING VIDEO NAMEIS PREFILL BOOK DATA IN EDIT FORM
        <div>
            <hr />
            <h4> Additional Info</h4> 
            <div>
                Added By: {form.addedBy.name} <br />
                Date: {form.createdAt}
            </div>
            <div>
                Last Updated By: {form.lastUpdatedBy.name} <br />
                Date: {form.updatedAt}
            </div>
        </div> */}
        <div>
          <hr />
          <h4>Additional Info</h4>
          <div>
            Added By: {form?.addedBy?.name || "N/A"} <br />
            Date: {new Date(form?.createdAt).toLocaleString() || "N/A"}
          </div>
          <div>
            Last Updated By: {form?.lastUpdatedBy?.name || "N/A"} <br />
            Date: {new Date(form?.updatedAt).toLocaleString() || "N/A"}
          </div>
        </div>

        <div className="d-grid">
          <Button type="submit">Update the Book</Button>
        </div>
      </Form>
    </div>
  );
};

export default EditBookForm;
