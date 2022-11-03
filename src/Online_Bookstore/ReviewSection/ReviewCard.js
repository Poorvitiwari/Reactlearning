import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const ReviewCard = ({isbn13,title,image,rating,comment}) => {
  return (
    <>
     <Card style={{ width: '20rem' }} key={isbn13}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>Book-{title}</Card.Title>
            <Card.Text>
              Review-{comment}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Rating-{rating}</ListGroup.Item>
          </ListGroup>
        </Card>
    </>
  )
}

export default ReviewCard