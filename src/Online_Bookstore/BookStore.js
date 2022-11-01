import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import {Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReviewedBooks from "./ReviewedBooks";
function BookStore() {
  const [search, setSearch] = useState("");
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

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (search === "") {
      getBookData();
    } else {
      fetch(`https://api.itbook.store/1.0/search/${search}`)
        .then((response) => response.json())
        .then((data) => {
          setResult(data.books);
        });
    }
  };

  useEffect(() => {
    if (!window.localStorage.getItem("user_login")) {
      navigate("/");
    }
    getBookData();
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="search for books"
        />
      </Form>
<div className="container">
    <div className="row justify-content-center">
        <div className="col-6">
        <h1>Books</h1>
        {result.map(({ isbn13, title, image }) => (
              <Card style={{ width: '28rem' }} key={isbn13}>
                <Link to={`/books/${isbn13}`}>
                  <img src={image} alt="Books"/>
                  <div className="bottom">
                    <h3>{title}</h3>
                  </div>
                </Link>
              </Card>
            ))}
        </div>
        <div className="col-6">
        <ReviewedBooks/>
        </div>
    </div>
</div>
    </>
  );
}

export default BookStore;
