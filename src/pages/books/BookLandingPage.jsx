import React, { useEffect, useState } from "react";
import {
  Alert,
  Breadcrumb,
  Button,
  Col,
  Container,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSinglePublicBooksAction } from "../../features/book/bookAction";
import { setCart, setSelectedBook } from "../../features/book/bookSlice";
import Star from "../../components/star/star";
import Reviews from "../../components/reviews/Reviews";

const BookLandingPage = () => {
  const { slug } = useParams();
  const { selectedBook, cart } = useSelector((state) => state.bookInfo);
  // const publicBook = useSelector((state) => state.books.publicBook) || [];
  const [book, setBook] = useState({});
  const dispatch = useDispatch();
  const [showUrl, setShowUrl] = useState(0);

  useEffect(() => {
    //first approach, locally

    // const selectedBook = publicBooks?.find((book) => book.slug === slug);
    // console.log(selectedBook);
    // setBook(selectedBook);

    //secondapproach , fetch from the live server
    // if (!slug) return;

    dispatch(fetchSinglePublicBooksAction(slug));
  }, [dispatch, slug]);

  const handleOnAddCart = (e) => {
    e.preventDefault()

    dispatch(setCart(selectedBook));
  };
  console.log("imageList:", selectedBook?.imageList);

  const baseURL = import.meta.env.VITE_BASE_API_URL;
  // const mainImage = selectedBook?.imageList?.[showUrl] || selectedBook?.thumbnail;

  const isBookInCart = cart.find((item) => item._id === selectedBook._id);
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
            <Breadcrumb.Item active>{selectedBook?.title}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      {!selectedBook?._id && (
        <Row>
          <Col>
            <Alert variant="danger">
              This book is not available, please contact admin
            </Alert>
          </Col>
        </Row>
      )}
      {/* homework add a spinner here */}
      {selectedBook?._id && (
        <>
          <Row>
            <Col md={5}>
              <div className="mb-4">
                <img
                  // src={`${baseURL}/${mainImage.replace(/^\//, "")}`}
                  src={`${baseURL}/${selectedBook?.imageList[showUrl]?.replace(/^\//, "")}`}
                  alt={selectedBook.title}
                  // width={"100%"}
                  className="h-100 w-100 object-fit-contain"
                />
              </div>
              {/* scrollable thumbnails */}
              <div className="d-flex overflow-auto gap-2 py-3">
                {selectedBook.imageList?.map((url, i) => (
                  <img
                    src={`${baseURL}/${url.replace(/^\//, "")}`}
                    key={url}
                    width={"50px"}
                    className="img-thumbnail"
                    onClick={() => setShowUrl(i)}
                  />
                ))}
              </div>
            </Col>
            {/* <Col>
              <div className="d-flex h-100 flex-column justify-content-between">
                <div className="top">
                  <h1>{selectedBook.title}</h1>
                  <div className="fw-bolder">
                    {selectedBook.author} - {selectedBook.publishedYear}
                  </div>
                  <div className="my-3 d-flex gap-2">
                    <span>{selectedBook.genre}</span> {""} |
                    <Star avgRating={5} totalReviews={58} />
                  </div>
                  <div>{selectedBook.description}</div>
                </div>
              </div>
              <div className="bottom">
                <hr />
                <div className="d-grid">
                  <Button variant="dark">Add To Burrowing List</Button>
                </div>
              </div>
            </Col> */}

            <Col md={7} className="d-flex flex-column">
              <div>
                <h1>{selectedBook.title}</h1>
                <div className="fw-bolder">
                  {selectedBook.author} - {selectedBook.publishedYear}
                </div>

                <div className="my-3 d-flex gap-2">
                  <span>{selectedBook.genre}</span> |{" "}
                  <Star avgRating={5} totalReviews={58} />
                </div>

                <div>{selectedBook.description}</div>
              </div>

              <div className="mt-auto pt-3">
                <hr />
                <div className="d-grid">
                  <Button variant="dark" onClick={handleOnAddCart}>
                    {isBookInCart ? "Already in Cart" : "Add To Burrowing List"}
                  </Button>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mt-5 mb-5">
            <Col className="border p-3 rounded">
              <h3 className="margin-auto mt-5 text-center"> More details</h3>
              <Tabs
                defaultActiveKey="reviews"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="description" title="Description">
                  <div>{selectedBook.description}</div>
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                  <Reviews />
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default BookLandingPage;
