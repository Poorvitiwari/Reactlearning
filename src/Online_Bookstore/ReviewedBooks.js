import React, { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
const ReviewedBooks = () => {
  const [reviewData, setReviewData] = useState([]);
  const navigate=useNavigate();
  const UserData = JSON.parse(window.localStorage.getItem("user_login"));
  const ReviewBooksData = JSON.parse(
    window.localStorage.getItem("reviewBooks")
  );
  const userName = UserData[0].name;
  console.log(ReviewBooksData[userName]);
  const reviewedDataByUser = ReviewBooksData[userName];
  const getBookDetail = (id) => {
    fetch(`https://api.itbook.store/1.0/books/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const obj = { ...reviewedDataByUser[id], ...data };
        console.log(obj);
      });
  };

  useEffect(()=>{
    if (!window.localStorage.getItem("user_login")) {
        navigate("/");
      }else{
      Object.keys(reviewedDataByUser).forEach((id) => {
        fetch(`https://api.itbook.store/1.0/books/${id}`)
          .then((response) => response.json())
          .then((data) => {
            const obj = { ...reviewedDataByUser[id], ...data };
            console.log(obj);
            setReviewData([obj,...reviewData])
          });

      });
    }
  },[])
        console.log(reviewData);
  return <div>ReviewedBooks</div>;
};

export default ReviewedBooks;
