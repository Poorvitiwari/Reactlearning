import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import { UserAuthentication } from "../Context/UserAuthentication";
import ReviewCard from "./ReviewCard";
const ReviewedBooks = () => {
  const { darkMode } = useContext(ThemeContext);
  const [reviewData, setReviewData] = useState([]);
  const navigate = useNavigate();
  const{user}=useContext(UserAuthentication)
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
    if (!user) {
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
      <h1 className={darkMode ? "about-details-dark" : "about-details"}>Reviewed Books </h1>
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
