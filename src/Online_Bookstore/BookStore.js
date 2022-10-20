import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
function BookStore() {
    const[search,setSearch]=useState("");
    const[result,setResult]=useState([])

    const getBookData=async()=>{
        try{
            const response=await fetch(`https://api.itbook.store/1.0/new`);
            const bookData= await response.json()
            console.log(bookData.books);
            setResult(bookData.books)

        }
        catch(err){
            console.log(err);
        }
     }

     const handleChange=(event)=>{
        setSearch(event.target.value)
        
     }
     const handleSubmit=(event)=>{
        event.preventDefault();
        if(search===""){
            getBookData()
        }
        else{
        fetch(`https://api.itbook.store/1.0/search/${search}`)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data.books);
            setResult(data.books)
        })
    }
     }
    useEffect(()=>{
        getBookData();
    },[]);

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}
        placeholder="search for books"/>
        </form>
        <ul>
            
            {result.map(({isbn13,title,image})=>(
                <div className='card' key={isbn13}>
                     <Link to={`/books/${isbn13}`}>
                    <img src={image}/>
                    <div className='bottom' >
                        <h3>{title}</h3>
                    </div>
                    </Link>
                </div>

            ))}
            
        </ul>
    </div>
  )
}

export default BookStore