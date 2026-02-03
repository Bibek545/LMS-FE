import React, { useState } from 'react'
import { Button, ButtonGroup, Col, Row } from 'react-bootstrap'
import CustomCard, { CustomListCard } from '../customCard/CustomCard'
import CustomPagination from '../customPagination/CustomPagination'


const booksPerScreen = 10;
const BookListing = ({bookList}) => {
  const [view, setView] = useState("card");
  const [active, setActive] = useState(1);

  const pages = Math.ceil(bookList.length / booksPerScreen);
  const startIndex = (active - 1) * booksPerScreen;
  const endIndex = startIndex + booksPerScreen;
  const displayBooks = bookList.slice(startIndex, endIndex);
    
  return (
      <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <div>{bookList.length} Books found</div>
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
      </Row>
  )
}

export default BookListing