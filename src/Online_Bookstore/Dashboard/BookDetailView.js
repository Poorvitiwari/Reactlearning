import React, { useContext } from "react";
import { Button,Row,Col,Container,Card,ListGroup,Form,} from "react-bootstrap";
import {handleSubmit} from './SetReviewInLocalStorage'
const BookDetailView = ({id,booksData,review,setReview}) => {
    const submitClick = e=>{
        e.preventDefault();
        handleSubmit({id,review});
    } 
    const options=[
      {value:1,label:"one"},
      {value:2,label:"two"},
      {value:3,label:"three"},
      {value:4,label:"four"},
      {value:5,label:"five"},
      {value:6,label:"six"},
      {value:7,label:"seven"},
      {value:8,label:"eight"},
      {value:9,label:"nine"},
      {value:10,label:"ten"}
    ]
    console.log(options);
    const{image,title,desc,authors,pages,year,price}=booksData
  return (
    <div>
      <Container fluid>
        <Row>
          <Col align="center">
            <Card className="text-center" style={{ width: "28rem" }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{desc}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Author:{authors}</ListGroup.Item>
                <ListGroup.Item>Pages:{pages}</ListGroup.Item>
                <ListGroup.Item>Year:{year}</ListGroup.Item>
                <ListGroup.Item>Price:{price}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Form onSubmit={submitClick}>
                  <Form.Group>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => setReview(e.target.value)}
                    >
                        {options.map((option)=>{
                          return(<option key={option.value}>{option.label}</option> 
                            )
                        })
                        }
                    </Form.Select>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="comment here"
                      value={comment}
                      onChange={(e) => setReview(e.target.value)}
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
  );
};

export default BookDetailView;
