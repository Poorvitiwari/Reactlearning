import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from "react-router-dom";
const ReviewedBooks = () => {
  const [reviewData, setReviewData] = useState([]);
  const navigate = useNavigate();
  const UserData = JSON.parse(window.localStorage.getItem("user_login"));
  const ReviewBooksData = JSON.parse(
    window.localStorage.getItem("reviewBooks")
  );
  const userName = UserData[0].name;
  useEffect(() => {
    const reviewedDataByUser = ReviewBooksData[userName];
    if (!window.localStorage.getItem("user_login")) {
      navigate("/");
    } else if (reviewedDataByUser) {
      let arr = []
      Object.keys(reviewedDataByUser).forEach((id) => {
        fetch(`https://api.itbook.store/1.0/books/${id}`)
          .then((response) => response.json())
          .then((data) => {
            const { image, isbn13, title } = data;
            const obj = { image, isbn13, title, ...reviewedDataByUser[id] };
            arr.push(obj);
          }).then(() => {
            console.log(arr);
            setReviewData(arr);
            console.log(reviewData);
            console.log(arr);
          })
          
      });
    }
  }, [])
  return <>
    <h1>Reviewed Books </h1>
    {console.log("data",reviewData)}
    {
      reviewData.length > 0 ? reviewData.map(({ isbn13, title, image, rating, comment }) => (
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
      ))
        : <>
          <h6>No books reviewed</h6>
        </>
    }
  </>;;
};

export default ReviewedBooks;
