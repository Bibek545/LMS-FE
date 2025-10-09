import React from "react";
import EditBookForm from "../../components/forms/bookForms/EditBookForm.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { deleteBookAPI } from "../../features/book/bookApi.js";

const EditBookPage = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const handleOnDelete = async () => {
    if (confirm("Are you sure you want to delete this book")) {
      const result = await deleteBookAPI(_id);
      result.status === "success" && navigate("/user/books");
    }
  };
  //  console.log(_id)
  return (
    <div>
      <div className="p-3">
        <h3> You can edit the book here.</h3>
        <hr />
        <Link to="/user/books">
          <Button variant="secondary"> &lt; Back</Button>
        </Link>
        <EditBookForm />
      </div>
      <div className="d-grid p-5">
        <Button variant="danger" onClick={handleOnDelete}>
          Delete the book
        </Button>
      </div>
    </div>
  );
};

export default EditBookPage;
