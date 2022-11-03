import React from "react";
import { Button,Row,Col,Container,Card,ListGroup,Form,} from "react-bootstrap";
import {handleSubmit} from './SetReviewInLocalStorage'
const BookDetailView = ({id,rating,booksData,setComment,comment,setRating}) => {
    const submitClick = e=>{
        e.preventDefault();
        handleSubmit({id,rating,comment});
    } 
  return (
    <>
      <Container fluid>
        <Row>
          <Col align="center">
            <Card className="text-center" style={{ width: "28rem" }}>
              <Card.Img variant="top" src={booksData.image} />
              <Card.Body>
                <Card.Title>{booksData.title}</Card.Title>
                <Card.Text>{booksData.desc}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Author:{booksData.authors}</ListGroup.Item>
                <ListGroup.Item>Pages:{booksData.pages}</ListGroup.Item>
                <ListGroup.Item>Year:{booksData.year}</ListGroup.Item>
                <ListGroup.Item>Price:{booksData.price}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Form onSubmit={submitClick}>
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
    </>
  );
};

export default BookDetailView;
