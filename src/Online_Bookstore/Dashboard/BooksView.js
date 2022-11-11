import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
const BooksView = ({isbn13,title,image}) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? "canvas-dark" : "canvas"}>
          <Card style={{ width: "28rem" }} className={darkMode ? "about-details-dark" : "about-details"} >
            <Link to={`/books/${isbn13}`}>
             { image && <img src={image} alt="Books" /> }
              <div className="bottom">
                <h3>{title}</h3>
              </div>
            </Link>
          </Card>
    </div>
  );
};

export default BooksView;
