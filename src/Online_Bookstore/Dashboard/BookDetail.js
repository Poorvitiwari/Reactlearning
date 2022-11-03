import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch from "../CustomHooks/useFetch";
import BookDetailView from "./BookDetailView";
import {handleSubmit} from './SetReviewInLocalStorage'
const BookDetail = () => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const{booksData}=useFetch(`https://api.itbook.store/1.0/books/${id}`)
  handleSubmit({id,rating,booksData,comment})
  useEffect(() => {
    if (!window.localStorage.getItem("user_login")) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div>
        <BookDetailView booksData={booksData} id={id} rating={rating} setRating={setRating} comment={comment} setComment={setComment} />
      </div>
    </>
  );
};

export default BookDetail;
