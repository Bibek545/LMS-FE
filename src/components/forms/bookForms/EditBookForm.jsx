import React, { useEffect, useState } from "react";
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
  // const [images, setImages] = useState("");
  const [images, setImages] = useState([]);

  const { _id } = useParams();
  const { form, setForm, handleOnChange } = useForm(initialState);
  const { books } = useSelector((state) => state.bookInfo);
  const [imgToDelete, setImgToDelete] = useState([])
  // console.log(books);

  //    console.log(selectedBook);

  const handleOnImageSelect = (e) => {
    // console.log(e);
    const files = [...e.target.files];
    if (files.length > 2) {
      e.target.value = "";
      return alert("Only 2 images are allowed");
    }
    setImages([...e.target.files]);
  };

  useEffect(() => {
    if (_id !== form._id) {
      const selectedBook = books.find((book) => book._id === _id);
      selectedBook?._id ? setForm(selectedBook) : navigate("/user/books");
      //   setForm(selectedBook);
    }
  }, [setForm]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if(imgToDelete.includes(form.thumbnail)) {
      return alert("You can delete the thumbnail image. Please select another thumbnail before proceeding.")
    };
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
    // console.log(rest);

    const formData = new FormData();
    // console.log(form);
    for (const key in rest) {
      // console.log(key, form[key]);
      formData.append(key, rest[key]);
    }
    images.forEach((img) => formData.append("images", img));
    imgToDelete.map((img)=> formData.append("imgToDelete", img))

    const result = await updateBookAPI(formData);
    // console.log(result);
  };

  const handleOnImageToDelete = (e) => {
    const { checked, value } = e.target;
    console.log(checked, value);
    checked 
    ? setImgToDelete([...imgToDelete, value]) 
    : setImgToDelete(imgToDelete.filter((img) => img !== value)); 
  };
  // console.log(imgToDelete);
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
        <div className="m-3 d-flex">
          {form.imageList?.map((img) => (
            <div key={img} className="m-1 text-center">
              <Form.Check
                type="radio"
                name="thumbnail"
                value={img}
                checked={form.thumbnail === img}
                onChange={handleOnChange}
                // label={"Thumbnail"}
              />
              <Form.Label>Keep this as a thumbnail</Form.Label>
              <Form.Check
                type="checkbox"
                label="Delete"
                value={img}
                onChange={handleOnImageToDelete}
              />{" "}
              <Form.Label></Form.Label>
              <img
                src={`${import.meta.env.VITE_BASE_API_URL}/${img}`}
                alt="image"
                width="200px"
                className="image thumbnail"
              />
            </div>
          ))}
        </div>

        <Form.Group className="mb-3">
          <Form.Label>Upload multiple images</Form.Label>
          <Form.Control
            onChange={handleOnImageSelect}
            type="file"
            name="image"
            // required
            multiple
            accept="images/*"
          ></Form.Control>
        </Form.Group>

        <div className="mb-3">
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
