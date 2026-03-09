import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BorrowTable from "../../components/tables/BorrowTable";

const BurrowPage = ({isAdmin}) => {
  console.log("BurrowPage isAdmin:", isAdmin);
  return (
    <div className="p-3">
      <h3>{ isAdmin ? "All Borrows History" : "My Borrow History" }</h3>
      
      <hr />
      <div className="all-borrow-table">
        <BorrowTable isAdmin={isAdmin} />
      </div>
    </div>
  );
};

export default BurrowPage;
