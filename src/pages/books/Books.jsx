import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import BookTable from "../../components/tables/BookTable.jsx";
import { adminFetchAllBookAction } from "../../features/book/bookAction.js";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminFetchAllBookAction());
  }, [dispatch]);
  return (
    <div className="p-3">
      <h3>Books</h3>
      <hr />
      <div className="text-end">
        <Link to='/user/new-book'>
          <Button>Add New Book</Button></Link>
      
      </div>

      <div>{/* Books List */}</div>
      <div className="mt-4">

        <BookTable />
      </div>
    </div>
  );
};

export default Books;
