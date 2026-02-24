import React, { useState } from "react";
import { Alert, Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CustomCard, {
  CustomListCard,
} from "../../components/customCard/CustomCard";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-bootstrap/Pagination";
import CustomPagination from "../../components/customPagination/CustomPagination";
import { removeBookFromCart, resetCart, setRecentBurrow } from "./cartSlice";
// import { postBurrowApi } from "../../features/cart/cartApi.js";
import { toast } from "react-toastify";
import { postBurrowApi } from "../../features/cart/cartApi";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { cart } = useSelector((state) => state.cartInfo);
  const { user } = useSelector((state) => state.userInfo);
  const baseURL = import.meta.env.VITE_BASE_API_URL;

  const handleOnBookRemove = (_id) => {
    dispatch(removeBookFromCart(_id));

    console.log(_id);
  };

  const handleOnBurrow = async () => {
    if (confirm("Are you sure you want to burrow the books?")) {
      // dddddd
      const bookArg = cart.map(({ _id, title, thumbnail }) => {
        return {
          bookId: _id,
          bookTitle: title,
          thumbnail,
        };
      });
      const pending = postBurrowApi(bookArg);
      toast.promise(pending, {
        pending: "Processing your burrow request",
      });
      const { status, message, payload } = await pending;
      toast[status](message);
      // 1. store the payload coming from the server
      dispatch(setRecentBurrow(payload));
      // 2.clear the cart after burrowing
      dispatch(resetCart());
      //3. send them to a thank you page
      navigate("/thank-you")
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="py-3">My Burrowing List</h1>
          <div>
            <Table striped bordered hover>
              <tbody>
                {cart?.map((book) => (
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

            {cart?.length > 0 ? (
              <div className="text-end">
                {user._id ? (
                  <Button variant="secondary" onClick={handleOnBurrow}>
                    {" "}
                    Proceed To Burrow
                  </Button>
                ) : (
                  <Link to="/login" state={{ from: "/cart" }}>
                    <Button variant="secondary" onClick={handleOnBurrow}>
                      Login to Burrow
                    </Button>
                  </Link>
                )}
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
