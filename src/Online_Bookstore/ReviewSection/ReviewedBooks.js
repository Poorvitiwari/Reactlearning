import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReviewCard from "./ReviewCard";
const ReviewedBooks = () => {
  const [reviewData, setReviewData] = useState([]);
  const navigate = useNavigate();
  const UserData = JSON.parse(window.localStorage.getItem("user_login"));
  const ReviewBooksData = JSON.parse(
    window.localStorage.getItem("reviewBooks")||{}
  );
  const userName = UserData[0].name;
  let reviewedDataByUser={}
  useEffect(() => {
    if(ReviewBooksData){
       reviewedDataByUser = ReviewBooksData[userName];
    }
    if (!window.localStorage.getItem("user_login")) {
      navigate("/");
    } else if (reviewedDataByUser) {
      let arr = [];
      Object.keys(reviewedDataByUser).forEach((id) => {
        const obj = { ...reviewedDataByUser[id] };
        arr.push(obj);
        setReviewData(arr);
      });
    }
  }, []);
  return (
    <>
      <h1>Reviewed Books </h1>
      {reviewData.length > 0 ? (
        reviewData.map(({ isbn13, title, image, rating, comment }) => (
          <ReviewCard
            isbn13={isbn13}
            title={title}
            image={image}
            rating={rating}
            comment={comment}
          />
        ))
      ) : (
        <>
          <h6>No books reviewed</h6>
        </>
      )}
    </>
  );
};

export default ReviewedBooks;