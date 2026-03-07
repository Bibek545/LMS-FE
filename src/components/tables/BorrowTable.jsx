import React, { use, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllBorrowAction } from "../../features/borrow/borrowAction";

const BorrowTable = () => {
  const dispatch = useDispatch();

  const { allBorrows } = useSelector((state) => state.borrowInfo);

  useEffect(() => {
    dispatch(getAllBorrowAction());
  }, [dispatch]);
  console.log("row:", allBorrows?.[0]);

  const handleOnSearch = () => {};
  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <div>10 borrows(s) found!</div>
        <div>
          <Form.Control
            placeholder="Search book by name"
            onChange={handleOnSearch}
          />
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Thumbnail</th>
            <th>Book Title </th>
            <th> Due</th>
            <th>Returned Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allBorrows?.map(
            (
              { _id, bookTitle, thumbnail, dueDate, isReturned, returnedDate },
              i,
            ) => (
              <tr key={_id}>
                <td>{i + 1}</td>
                <td
                  className={
                    status === "active" ? "text-success" : "text-danger"
                  }
                >
                  {status}
                </td>
                <td>
                  <img
                    // src={`${import.meta.env.VITE_BASE_API_URL}/${thumbnail}`}
                    src={import.meta.env.VITE_BASE_API_URL + thumbnail}
                    alt=""
                    width="100px"
                  />
                </td>
                <td>{bookTitle}</td>
                <td>{dueDate.slice(0, 10)}</td>
                <td>{isReturned ? returnedDate.slice(0, 10) : "No"}</td>
                <td>
                  <Link to={"/user/edit-book/" + _id}>
                    <Button variant="primary" disabled={isReturned}>
                      Return book
                    </Button>
                  </Link>
                  <Button variant="warning">Leave Review</Button>
                  Reviewd
                </td>
              </tr>
            ),
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default BorrowTable;
