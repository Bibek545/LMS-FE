import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  // Optional: auto redirect after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container className="text-center py-5">
      <h1 className="mb-4">🎉 Burrow Successful!</h1>

      <p className="fs-5">
        Thank you for burrowing books from our library.
      </p>

      <p>
        Please return your books before the due date.
      </p>

      <div className="mt-4">
        <Button variant="secondary" onClick={() => navigate("/")}>
          Go Back Home
        </Button>
      </div>

      <p className="mt-3 text-muted">
        You will be redirected automatically in 5 seconds...
      </p>
    </Container>
  );
};

export default ThankYou;