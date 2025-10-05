import React from "react";
import NewBookForm from "../../components/forms/bookForms/NewBookForm";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const NewBookPage = () => {
  return (
    <>
      <div className="p-3">
        <div className="p-3">Add new book here</div>
        <hr />
        <Link to="/user/books">
          <Button variant="secondary"> &lt; Back</Button>
        </Link>
        <NewBookForm />
      </div>
    </>
  );
};

export default NewBookPage;
