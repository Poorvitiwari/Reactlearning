import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import SignUpView from "./SignUpView";


const SignUp = () => {
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [data] = useState([]);


  const getdata = (e) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    console.log(inputValue);
  };


  const addData = (e) => {
    e.preventDefault();
    const { name, email, password } = inputValue;
    if (name === "") {
      alert(" name field is requred!");
    } else if (email === "") {
      alert("email field is requred");
    } else if (!email.includes("@")) {
      alert("plz enter valid email addres");
    } else if (password === "") {
      alert("password field is requred");
    } else if (password.length < 5) {
      alert("password length greater five");
    } else {
      alert("data added succesfully");
      navigate("Login");
      if (window.localStorage.getItem("inputValue")) {
        const registerUsers = JSON.parse(
          window.localStorage.getItem("inputValue")
        );
        registerUsers.push(inputValue);
        window.localStorage.setItem(
          "inputValue",
          JSON.stringify(registerUsers)
        );
      } else {
        window.localStorage.setItem(
          "inputValue",
          JSON.stringify([...data, inputValue])
        );
      }
    }
  };
  
  return (
    <div className={darkMode ? "canvas-dark" : "canvas"}>
      <SignUpView getdata={getdata} addData={addData} />
    </div>
  );
};

export default SignUp;
