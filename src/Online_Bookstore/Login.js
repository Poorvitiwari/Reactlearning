import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Row, Col, Container, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

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

          localStorage.setItem("user_login", JSON.stringify(userlogin));
          navigate("/bookstore");
        }
      }
    }
  };
  return (
    <>
      <div className="mt-3" style={{ width: "100%" }}>
        <h3 className="text-center col-lg-6">Login</h3>
        <Container fluid>
          <Row>
            <Col align="center">
              <Form>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={getdata}
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicPassword"
                >
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={getdata}
                    placeholder="Password"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  className="col-lg-6"
                  onClick={addData}
                  style={{ background: "rgb(67, 185, 127)" }}
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
              <p className="mt-3">
                Create an Account{" "}
                <span>
                  <NavLink to="/">SignUp</NavLink>
                </span>{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
