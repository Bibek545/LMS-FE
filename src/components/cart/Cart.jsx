import React, { useState } from "react";
import { Alert, Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomCard, {
  CustomListCard,
} from "../../components/customCard/CustomCard";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-bootstrap/Pagination";
import CustomPagination from "../../components/customPagination/CustomPagination";
import { removeBookFromCart } from "../../features/book/bookSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.bookInfo);
  const baseURL = import.meta.env.VITE_BASE_API_URL;

  const handleOnBookRemove = (_id) => {
    dispatch(removeBookFromCart(_id));

    console.log(_id);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="py-3">My Burrowing List</h1>
          <div>
            <Table striped bordered hover>
              <tbody>
                {cart.map((book) => (
                  <tr key={book._id}>
                    <td>
                      <img
                        src={`${baseURL}/${book.thumbnail?.replace(/^\//, "")}`}
                        alt=""
                        width="100px"
                      />
                    </td>
                    <td>{book.title}</td>
                    <td>Returning: 15-12-2026</td>
                    <td>
                      <Button
                        variant="link"
                        onClick={() => handleOnBookRemove(book._id)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {cart.length > 0 ? (
              <div className="text-end">
                <Button> Login To Burrow</Button>
              </div>
            ) : (
              <Alert variant="info">No books in the cart</Alert>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
