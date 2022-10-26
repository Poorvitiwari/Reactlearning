import React,{useState,useEffect} from 'react'
import { Button, Row, Col, Container, Form } from "react-bootstrap"
import { useParams } from 'react-router-dom'

const BookDetail=()=>{
    const[book,setBook]= useState({})
    const{id}=useParams();
    const[reviewBooks,setReviewBooks]=useState([{
        book:"",
        userName:"",
        rating:""

    }])
    console.log(reviewBooks);

    const getBookDetail=()=>{
        fetch(`https://api.itbook.store/1.0/books/${id}`)
        .then((response)=>(response.json()))
        .then((data)=>{
            setBook(data)
        })
    }

    const handleChange=(e)=>{
        const{value}=e.target;
        const getUserName=window.localStorage.getItem("inputValue");
        const userData=JSON.parse(getUserName)
        console.log(userData);
        const[{name}]=userData
        console.log(name);
        setReviewBooks({book:book.title,
                        userName:name,
                        rating:value
        })
        console.log(reviewBooks);



    }
    useEffect(()=>{
        getBookDetail();
    },[])
  return (
    <>
        <div>
        <img src={book.image}/>
        <h2>{book.title}</h2>
        <Form.Select aria-label="Default select example" onChange={handleChange}>
            <option>Rate the book</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
        </div>
        
    </>
  )
}

export default BookDetail