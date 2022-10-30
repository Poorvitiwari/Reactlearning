import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container, Form } from "react-bootstrap";
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
      <h1>Books</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="search for books"
        />
      </Form>
      <div className="container mt-3">
        <section className="left_data d-flex justify-content-between">
          <div className=" left_data mt-3 p-3" style={{ width: "100%" }}>
            {result.map(({ isbn13, title, image }) => (
              <div className="card" key={isbn13}>
                <Link to={`/books/${isbn13}`}>
                  <img src={image} />
                  <div className="bottom">
                    <h3>{title}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className="left_data d-flex justify-content-between">
          <div className=" left_data mt-3 p-3" style={{ width: "100%" }}>
            <ReviewedBooks/>
          </div>
        </section>
      </div>
      <div></div>
    </>
  );
}

export default BookStore;
