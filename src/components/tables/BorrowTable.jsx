// import React, { use, useEffect, useState } from "react";
// import { Button, Form } from "react-bootstrap";
// import Table from "react-bootstrap/Table";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { getAllBorrowAction } from "../../features/borrow/borrowAction";

// const BorrowTable = ({isAdmin}) => {
//   const dispatch = useDispatch();

//   const { allBorrows, myBorrows } = useSelector((state) => state.borrowInfo);

//   const borrowSource = isAdmin ? allBorrows : myBorrows;

//   useEffect(() => {
//     dispatch(getAllBorrowAction(isAdmin));
//   }, [dispatch, isAdmin]);
//   console.log("row:", allBorrows?.[0]);

//   const handleOnSearch = () => {};
//   return (
//     <div>
//       <div className="d-flex justify-content-between mb-4">
//         <div>{borrowSource?.length} found!</div>
//         <div>
//           <Form.Control
//             placeholder="Search book by name"
//             onChange={handleOnSearch}
//           />
//         </div>
//       </div>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Status</th>
//             <th>Thumbnail</th>
//             <th>Book Title </th>
//             <th> Due</th>
//             <th>Returned Date</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {borrowSource?.map(
//             (
//               { _id, bookTitle, thumbnail, dueDate, isReturned, returnedDate },
//               i,
//             ) => (
//               <tr key={_id}>
//                 <td>{i + 1}</td>
//                 <td
//                   className={
//                     status === "active" ? "text-success" : "text-danger"
//                   }
//                 >
//                   {status}
//                 </td>
//                 <td>
//                   <img
//                     // src={`${import.meta.env.VITE_BASE_API_URL}/${thumbnail}`}
//                     src={import.meta.env.VITE_BASE_API_URL + thumbnail}
//                     alt=""
//                     width="100px"
//                   />
//                 </td>
//                 <td>{borrowSource?.bookTitle}</td>
//                 <td>{dueDate.slice(0, 10)}</td>
//                 <td>{isReturned ? returnedDate.slice(0, 10) : "No"}</td>
//                 <td>
//                   <Link to={"/user/edit-book/" + _id}>
//                     <Button variant="primary" disabled={isReturned}>
//                       Return book
//                     </Button>
//                   </Link>
//                   <Button variant="warning">Leave Review</Button>
//                   Reviewd
//                 </td>
//               </tr>
//             ),
//           )}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default BorrowTable;

// import React, { useEffect } from "react";
// import { Button, Form } from "react-bootstrap";
// import Table from "react-bootstrap/Table";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useLocation } from "react-router-dom";
// import { getAllBorrowAction } from "../../features/borrow/borrowAction";
// // import { is } from "date-fns/locale";

// const BorrowTable = ({ isAdmin }) => {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const pathname = location.pathname;

//   const { allBorrows, myBorrows } = useSelector((state) => state.borrowInfo);

//   const borrowSource = isAdmin ? allBorrows : myBorrows;

//   useEffect(() => {
//     dispatch(getAllBorrowAction(isAdmin));
//   }, [dispatch, isAdmin]);

//   console.log("row:", borrowSource?.[0]);
//   console.log("BorrowTable isAdmin:", isAdmin);
//   console.log("borrowSource:", borrowSource);

//   const handleOnSearch = () => {};

//   return (
//     <div>
//       <div className="d-flex justify-content-between mb-4">
//         <div>{borrowSource?.length || 0} found!</div>
//         <div>
//           <Form.Control
//             placeholder="Search book by name"
//             onChange={handleOnSearch}
//           />
//         </div>
//       </div>

//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>#</th>
//             {!pathname.includes("/my-borrow") && <th>Status</th>}
//             <th>Thumbnail</th>
//             <th>Book Title</th>
//             <th>Due</th>
//             <th>Returned Date</th>
//             {!isAdmin && <th>Action</th>}
//           </tr>
//         </thead>
//         <tbody>
//           {borrowSource?.map(
//             ({ _id, cart,bookSlug, dueDate, isReturned, returnedDate, reviewId }, i) => {
//               const status = isReturned ? "Returned" : "Borrowed";

//               return (
//                 <tr key={_id}>
//                   <td>{i + 1}</td>
//                   {!pathname.includes("/my-borrow") && (
//                     <td
//                       className={`${isReturned ? "text-danger" : "text-success"} ${
//                         reviewId ? " left-review" : ""
//                       }`}
//                     >
//                       {status}
//                     </td>
//                   )}

//                   <td>
//                     {cart?.length
//                       ? cart.map((item) => (
//                           <img
//                             key={item.bookId}
//                             src={`${import.meta.env.VITE_BASE_API_URL}/${item.thumbnail}`}
//                             alt={item.bookTitle}
//                             width="60px"
//                             className="me-2"
//                           />
//                         ))
//                       : "No image"}
//                   </td>

//                 <td>
//   {cart?.length
//     ? cart.map((item) => (
//         <a
//           key={item.bookId}
//           href={`/book/${item.bookSlug}`}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {item.bookTitle}
//         </a>
//       ))
//     : "No title"}
// </td>
//                   <td>{dueDate?.slice(0, 10)}</td>
//                   <td>
//                     {isReturned && returnedDate
//                       ? returnedDate.slice(0, 10)
//                       : "No"}
//                   </td>

//                   {!pathname.includes("/borrow-history") && (
//                     <td>
//                       {!isReturned && (
//                         <Button variant="primary" disabled={isReturned}>
//                           Return book
//                         </Button>
//                       )}
//                       {/* <Link to={"/user/edit-book/" + _id}>
                     
//                       </Link>{" "} */}
//                       {isReturned && !reviewId && (
//                         <Button variant="warning">Leave Review</Button>
//                       )}
//                     </td>
//                   )}
//                 </tr>
//               );
//             },
//           )}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default BorrowTable;

import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getAllBorrowAction } from "../../features/borrow/borrowAction";

const BorrowTable = ({ isAdmin }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { allBorrows, myBorrows } = useSelector((state) => state.borrowInfo);

  const borrowSource = isAdmin ? allBorrows : myBorrows;

  useEffect(() => {
    dispatch(getAllBorrowAction(isAdmin));
  }, [dispatch, isAdmin]);

  const handleOnSearch = () => {};

  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <div>{borrowSource?.length || 0} found!</div>
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
            {!pathname.includes("/my-borrow") && <th>Status</th>}
            <th>Thumbnail</th>
            <th>Book Title</th>
            <th>Due</th>
            <th>Returned Date</th>
            {!pathname.includes("/borrow-history") && <th>Action</th>}
          </tr>
        </thead>

        <tbody>
          {borrowSource?.map((row, i) => (
            <tr key={row._id}>
              <td>{i + 1}</td>

              {!pathname.includes("/my-borrow") && (
                <td className={row.isReturned ? "text-danger" : "text-success"}>
                  {row.isReturned ? "Returned" : "Borrowed"}
                </td>
              )}

              <td>
                {row.cart?.length ? (
                  <img
                    src={`${import.meta.env.VITE_BASE_API_URL}/${row.cart[0].thumbnail}`}
                    alt={row.cart[0].bookTitle}
                    width="60"
                  />
                ) : (
                  "No image"
                )}
              </td>

              <td>
                {row.cart?.length ? (
                  <a
                    href={`/book/${row.cart[0].bookSlug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {row.cart[0].bookTitle}
                  </a>
                ) : (
                  "No title"
                )}
              </td>

              <td>{row.dueDate?.slice(0, 10)}</td>

              <td>
                {row.isReturned && row.returnedDate
                  ? row.returnedDate.slice(0, 10)
                  : "No"}
              </td>

              {!pathname.includes("/borrow-history") && (
                <td>
                  {!row.isReturned && (
                    <Button variant="warning">Return book</Button>
                  )}
                  {row.isReturned && (
                    <Button variant="success">Leave Review</Button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BorrowTable;