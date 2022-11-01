import React, { useState, useEffect } from "react";
import {
  Button,
  Row,
  Col,
  Container,
  Card,
  ListGroup,
  Form,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const BookDetail = () => {
  const [book, setBook] = useState({});
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const getBookDetail = () => {
    fetch(`https://api.itbook.store/1.0/books/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(rating);
    const getBookData = window.localStorage.getItem("user_login");
    const userData = JSON.parse(getBookData);
    const userName = userData[0].name;
    if (window.localStorage.getItem("reviewBooks")) {
      const reviewData = JSON.parse(window.localStorage.getItem("reviewBooks"));
      if (reviewData[userName]) {
        reviewData[userName][id] = {
          rating: rating,
          comment: comment,
        };
      } else {
        reviewData[userName] = {};
        reviewData[userName][id] = {
          rating: rating,
          comment: comment,
        };
      }
      console.log(reviewData);

      window.localStorage.setItem("reviewBooks", JSON.stringify(reviewData));
    } else {
      const obj = {};
      const obj1 = {};
      obj1[id] = {
        rating: rating,
        comment: comment,
      };
      console.log(obj1);
      obj[userName] = {};
      obj[userName][id] = {
        rating: rating,
        comment: comment,
      };
      console.log(obj);
      window.localStorage.setItem("reviewBooks", JSON.stringify(obj));
    }
  };
  useEffect(() => {
    if (!window.localStorage.getItem("user_login")) {
      navigate("/");
    }
    getBookDetail();
  }, []);
  return (
    <>
      {/* <img src={book.image}/>
        <h2>{book.title}</h2> */}
      <div>
        <Container fluid>
          <Row>
            <Col align="center">
              <Card className="text-center" style={{ width: "28rem" }}>
                <Card.Img variant="top" src={book.image} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.desc}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Author:{book.authors}</ListGroup.Item>
                  <ListGroup.Item>Pages:{book.pages}</ListGroup.Item>
                  <ListGroup.Item>Year:{book.year}</ListGroup.Item>
                  <ListGroup.Item>Price:{book.price}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group>
                      <Form.Select
                        aria-label="Default select example"
                        onChange={(e) => setRating(e.target.value)}
                      >
                        <option>Rate the book</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five</option>
                        <option value="6">Six</option>
                        <option value="7">Seven</option>
                        <option value="8">Eight</option>
                        <option value="9">Nine</option>
                        <option value="10">Ten</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        placeholder="comment here"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                    </Form.Group>
                    <Button type="submit">Rate</Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BookDetail;
