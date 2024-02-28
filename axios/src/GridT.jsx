import {useEffect, useState} from 'react'
import './Ap.css'
import axios from 'axios'

function GridT() {
    const [myData,setMyData]=useState([])
    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/posts/')
       .then((res)=>setMyData(res.data));
       

    },[]);
  return (
    <>
    <h1> Axios Tutorial</h1>
    
    <div className='grid'>
    {myData.map((post)=>{
        const{id ,title,body}=post;
        return <div className=' card' key={id}>
            <h2>{title .slice(0,15) .toUpperCase()}</h2>
            <p>{body.slice(0 ,100)}</p>
        </div>
    })}
    </div>
    </>
  )
}

export default GridT