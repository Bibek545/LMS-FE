import React from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import BookListing from "../../components/bookListing/BookListing";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const navigate = useNavigate();
  !query && navigate("/");

  const { publicBooks } = useSelector((state) => state.bookInfo);
  const searchBookArg = publicBooks.filter((b) => {
    const text = (b.title + " " + b.description).toLowerCase();
    return text.includes(query.toLocaleLowerCase());
  });

  return (
    <Container>
      <Row className="my-3">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/search" }}>
              Search
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <BookListing bookList={searchBookArg} />
    </Container>
  );
};

export default Search;
