import React, { useEffect } from "react";
import { Button, Container, Table, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resetRecentBurrowCart } from "../../components/cart/cartSlice";

const ThankYou = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { recentBurrow } = useSelector((state) => state.cartInfo);

  const baseURL = import.meta.env.VITE_BASE_API_URL;
  const REDIRECT_SECONDS = 10;

  // Auto redirect after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, REDIRECT_SECONDS * 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  // Clear recent burrow data from store when leaving this page
  useEffect(() => {
    return () => {
      dispatch(resetRecentBurrowCart());
    };
  }, [dispatch]);

  return (
    <Container className="py-5">
      <div className="text-center">
        <h1 className="mb-3">🎉 Burrow Successful!</h1>

        <p className="fs-5 mb-1">Thank you for burrowing books from our library.</p>
        <p className="mb-4">Please return your books before the due date.</p>

        <div className="mb-4">
          <Link to="/user/my-borrow">See your burrowing history</Link>
        </div>
      </div>

      {recentBurrow?.length > 0 ? (
        <Table striped bordered hover responsive>
          <tbody>
            {recentBurrow.map(({ _id, title, thumbnail, dueDate }) => (
              <tr key={_id}>
                <td style={{ width: "120px" }}>
                  <img
                    src={`${baseURL}/${thumbnail?.replace(/^\//, "")}`}
                    alt={title}
                    width="100"
                  />
                </td>
                <td className="align-middle">{title}</td>
                <td className="align-middle">
                  Returning: {dueDate ? dueDate.slice(0, 10) : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Alert variant="info" className="text-center">
          No recent burrow items found.
        </Alert>
      )}

      <div className="text-center mt-4">
        <Button variant="secondary" onClick={() => navigate("/")}>
          Go Back Home
        </Button>

        <p className="mt-3 text-muted">
          You will be redirected automatically in {REDIRECT_SECONDS} seconds...
        </p>
      </div>
    </Container>
  );
};

export default ThankYou;