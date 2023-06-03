import React, { useContext } from "react";
import { Button, Row, Col, Container, Form } from "react-bootstrap"

import { NavLink } from 'react-router-dom'
import { ThemeContext } from "../Context/ThemeContext";
const SignUpView = ({getdata,addData}) => {
  const { darkMode } = useContext(ThemeContext)?? {};
  return (
    <div className={darkMode ? "about-details-dark" : "about-details"}>
      <div className="mt-3" style={{ width: "100%" }}>
        <h3 className="text-center col-lg-6">Sign Up</h3>
        <Container fluid>
          <Row >
            <Col align="center">
              <Form>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={getdata}
                    placeholder="Enter Your Name"
                  />
                </Form.Group>
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
                Already Have an Account{" "}
                <span>
                  <NavLink to="Login">SignIn</NavLink>
                </span>{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SignUpView;
