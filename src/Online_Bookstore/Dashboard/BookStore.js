import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ReviewedBooks from "../ReviewSection/ReviewedBooks";
import BooksView from "./BooksView";
import BookSearch from "./BookSearch";
import { ThemeContext } from "../Context/ThemeContext";
import { UserAuthentication } from "../Context/UserAuthentication";
function BookStore() {
  const [result, setResult] = useState([]);
  const { darkMode } = useContext(ThemeContext) ?? {};
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user_login"));
  const userName = user?.[0]?.name;
  console.log("hello",JSON.parse(localStorage.getItem("user_login")));
  const getBookData = async () => {
    try {
      const response = await fetch('https://api.itbook.store/1.0/new');
      const bookData = await response.json();
      setResult(bookData.books);
    } catch (err) {
      setResult(err);
    }

  };
  useEffect(() => {
    if (user && user.name) {
      getBookData();
    } else {
      navigate("/");
    }
  }, [user]);

  return (
    <div className={darkMode ? "canvas-dark" : "canvas"}>
    <BookSearch getBookData={getBookData}/>
      <div className="container">
        <div className="row justify-content-center">
        <div className="col-6">
        <h1 className={darkMode ? "about-details-dark" : "about-details"}>Books</h1>
        {result.map(({ isbn13, title, image }) => (
          <BooksView key={isbn13} isbn13={isbn13} title={title} image={image}/>
          ))}
          </div>
          <div className="col-6">
            <ReviewedBooks  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookStore;
