import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReviewCard from "./ReviewCard";
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
       <ReviewCard isbn13={isbn13} title={title} image={image} rating={rating} comment={comment} />
      ))
        : <>
          <h6>No books reviewed</h6>
        </>
    }
  </>;;
};

export default ReviewedBooks;
