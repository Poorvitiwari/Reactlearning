import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const BookDetail=()=>{
    const[book,setBook]= useState({})
    const{id}=useParams();
    
    const getBookDetail=()=>{
        fetch(`https://api.itbook.store/1.0/books/${id}`)
        .then((response)=>(response.json()))
        .then((data)=>{
            setBook(data)
        })
        
    }
    useEffect(()=>{
        getBookDetail();
    },[])
  return (
    <div>
        <img src={book.image}/>
        <h2>{book.title}</h2>
    </div>
  )
}

export default BookDetail