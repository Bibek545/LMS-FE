import React, { useEffect, useState } from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const BookLandingPage = () => {
  const { slug } = useParams();
  const { publicBooks } = useSelector((state) => state.bookInfo);
  // const publicBook = useSelector((state) => state.books.publicBook) || [];
  const [book, setBook] = useState({});

  useEffect(() => {
    console.log("PARAM slug:", slug);
    console.log("publicBooks:", publicBooks);
    console.log(
      "first book keys:",
      publicBooks?.[0] && Object.keys(publicBooks[0])
    );

    const selectedBook = publicBooks?.find((book) => book.slug === slug);
    console.log(selectedBook);
    setBook(selectedBook);
  }, [publicBooks, slug]);

  const baseURL = import.meta.env.VITE_BASE_API_URL;

  return (
    <Container>
      <Row className="my-3">
        <Col>
            <Breadcrumb>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/"}}>Home</Breadcrumb.Item>
      <Breadcrumb.Item linkAs={Link} linkProps={{to: "/library"}}>
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{book?.title}</Breadcrumb.Item>
    </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <img src={`${baseURL}/${book?.thumbnail?.replace(/^\//, "")}`} />
          </div>
        </Col>
        <Col>Book Info section</Col>
      </Row>
      <Row>
        <Col>Bottom section</Col>
      </Row>
    </Container>
  );
};

export default BookLandingPage;
