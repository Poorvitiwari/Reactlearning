import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Row, Col, Container, Form } from "react-bootstrap"
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

import { NavLink } from 'react-router-dom'
const SignUp=()=> {
    const navigate = useNavigate();
    const[inputValue,setInputValue]=useState({
        name: "",
        email: "",
        password: "" 
    })
    const [data] = useState([]);
    const getdata=(e)=>{
        const{value,name}=e.target;
        setInputValue({...inputValue,[name]:value})
        console.log(inputValue);

    }
    const addData=(e)=>{
        e.preventDefault();

        const { name, email, password } = inputValue;
        if (name === "") {
            alert(' name field is requred!')

        } else if (email === "") {
             alert('email field is requred')

        } else if (!email.includes("@")) {
             alert('plz enter valid email addres')

        }  else if (password === "") {
             alert('password field is requred')

        } else if (password.length < 5) {
             alert('password length greater five')

        } else {
            console.log("data added succesfully");
            navigate("Login")
            window.localStorage.setItem("inputValue",JSON.stringify([...data,inputValue]));

        }


    }
  return (
    <>
                    <div className="mt-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Container fluid >
                            <Row>
                    <Col align="center">
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">

                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="Login">SignIn</NavLink></span> </p>
                        </Col>
                </Row>
            </Container>
                    </div>
    </>
  )
}

export default SignUp