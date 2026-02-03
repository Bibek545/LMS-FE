import React, { useState } from "react";
import {
  Breadcrumb,
  Button,
  ButtonGroup,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomCard, {
  CustomListCard,
} from "../../components/customCard/CustomCard";
import { useSelector } from "react-redux";
import Pagination from "react-bootstrap/Pagination";
import CustomPagination from "../../components/customPagination/CustomPagination";
import BookListing from "../../components/bookListing/BookListing";

// const booksPerScreen = 10;
const AllBooks = () => {
  // const [view, setView] = useState("card");
  // const [active, setActive] = useState(1);


  const { publicBooks } = useSelector((state) => state.bookInfo);

  // const pages = Math.ceil(publicBooks.length / booksPerScreen);

  // let items = [];
  // for (let number = 1; number <= pages; number++) {
  //   items.push(
  //     <Pagination.Item key={number} active={number === active}
  //     onClick={()=> setActive(number)}
  //     >
  //       {number}
  //     </Pagination.Item>,
  //   );
  // }

  // const startIndex = (active - 1) * booksPerScreen;
  // const endIndex = startIndex + booksPerScreen;
  // const displayBooks = publicBooks.slice(startIndex, endIndex);

  return (
    <Container>
      <Row className="my-3">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/all-books" }}>
              All Books
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <div>{publicBooks.length} Books found</div>
            <div>
              <ButtonGroup aria-label="Basic example">
                <Button onClick={() => setView("card")} variant="secondary">
                  Card
                </Button>
                <Button onClick={() => setView("list")} variant="dark">
                  List
                </Button>
              </ButtonGroup>
            </div>
          </div>
          <hr />
          <div
            className={
              view === "card"
                ? "mt-3 booklist-container d-flex gap-2 flex-wrap justify-content-center"
                : "mt-3 booklist-container d-flex gap-2 flex-wrap "
            }
          >
            {displayBooks.length > 0 &&
              displayBooks.map((book) =>
                view === "card" ? (
                  <CustomCard key={book._id} {...book} />
                ) : (
                  <CustomListCard key={book._id} {...book} />
                ),
              )}
          </div>
          <hr />
          <CustomPagination
            active={active}
            setActive={setActive}
            pages={pages}
          />
        </Col>
      </Row> */}
      <BookListing bookList={publicBooks} />
    </Container>
  );
};

export default AllBooks;
