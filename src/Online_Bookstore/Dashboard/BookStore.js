import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReviewedBooks from "../ReviewSection/ReviewedBooks";
import BooksView from "./BooksView";
import BookSearch from "./BookSearch";
function BookStore() {
  const [result, setResult] = useState([]);
  const navigate = useNavigate();
  const getBookData = async () => {
    try {
      const response = await fetch(`https://api.itbook.store/1.0/new`);
      const bookData = await response.json();
      setResult(bookData.books);
    } catch (err) {
      console.log(err);
    }

  };
  useEffect(() => {
    if (!window.localStorage.getItem("user_login")) {
      navigate("/");
    }
    getBookData()
  }, []);

  return (
    <>
    <BookSearch getBookData={getBookData}/>
      <div className="container">
        <div className="row justify-content-center">
        <div className="col-6">
        <h1>Books</h1>
        {result.map(({ isbn13, title, image }) => (
          <BooksView key={isbn13} isbn13={isbn13} title={title} image={image}/>
          ))}
          </div>
          <div className="col-6">
            <ReviewedBooks  />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default BookStore;
