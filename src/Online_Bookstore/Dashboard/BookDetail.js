import React, { useState, useEffect, useContext } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import { UserAuthentication } from "../Context/UserAuthentication";
import useFetch from "../CustomHooks/useFetch";
import BookDetailView from "./BookDetailView";
import {handleSubmit} from './SetReviewInLocalStorage'
const BookDetail = () => {
  const { darkMode } = useContext(ThemeContext);
  const [review, setReview] = useState({
    comment: '',
    rating: 0
})
  // const [comment, setComment] = useState("");
  // const [rating, setRating] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const{user}=useContext(UserAuthentication)
  const{booksData}=useFetch(`https://api.itbook.store/1.0/books/${id}`)
  handleSubmit({id,review,booksData,user})
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  const props = {
    id,
    booksData,
    review,
    setReview
    
  }
  return (
    <>
      <div className={darkMode ? "canvas-dark" : "canvas"}>
        <BookDetailView {...props} />
      </div>
    </>
  );
};

export default BookDetail;
