import {useCallback, useEffect,useState} from 'react'
import axios from 'axios'
 const useFetch = (url) => {
  const[booksData,setBookData]=useState([])
  const getBooksData=useCallback(async()=>{
    try{
    const response=await axios.get(url);
    const {data} = await response;
    setBookData(data);
    
    }catch(err)
    {
      console.log(err);
    }
  },[url])
  useEffect(()=>{
    getBooksData();
  },[url,getBooksData])

  return{booksData}
}
export default useFetch;