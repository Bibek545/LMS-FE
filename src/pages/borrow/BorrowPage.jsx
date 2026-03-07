import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BorrowTable from "../../components/tables/BorrowTable";

const BurrowPage = () => {
  return (
    <div className="p-3">
      <h3>All Borrows</h3>
      <hr />
      <div className="all-borrow-table">
        <BorrowTable />
      </div>
    </div>
  );
};

export default BurrowPage;
