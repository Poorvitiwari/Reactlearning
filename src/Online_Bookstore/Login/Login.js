import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import LoginView from "./LoginView";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { darkMode } = useContext(ThemeContext)?? {};
  const getdata = (e) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    console.log(inputValue);
  };
  const addData = (e) => {
    e.preventDefault();
    const getUserData = window.localStorage.getItem("inputValue");
    console.log(getUserData);

    const { email, password } = inputValue;
    if (!email) {
      alert("email field is requred");
    } else if (!email.includes("@")) {
      alert("plz enter valid email addres");
    } else if (password === "") {
      alert("password field is requred");
    } else if (password.length < 5) {
      alert("password length greater five");
    } else {
      if (getUserData && getUserData.length) {
        const userdata = JSON.parse(getUserData);
        const userlogin = userdata.filter((el) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login succesfulyy");

          localStorage.setItem("user_login", JSON.stringify(userlogin[0]));
          navigate("/bookstore");
        }
      }
    }
  };
  return (
    <div className={darkMode ? "canvas-dark" : "canvas"}>
      <LoginView getdata={getdata} addData={addData} />
    </div>
  );
};

export default Login;
