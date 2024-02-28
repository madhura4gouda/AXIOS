import React from 'react'
 import Featch from './Featch'
// import GridT from './GridT'

function App() {
  return (
   
   <Featch/>
    // <GridT/>
  )
}

export default App
// import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import axios from'axios';
// import './App.css'

// function App() {
//    const [myData, setMyData] = useState([])
//   useEffect(()=>{
//     axios
//     .get('https://jsonplaceholder.typicode.com/posts/')
//     .then((res)=>setMyData(res.data));
   

//   },[]);

//   return (
//     <>
//     <h1>Axios Tutorials</h1>
//     <div className='grid'>
//     {myData.map((post)=>{
//       const{id, title,body}=post;
//       return (
//       <div className='card' key={id}>
//         <h2>{title.slice(0, 15).toUpperCase()}</h2>
//         <p>{body.slice}</p>
      

//       </div>
//     )
//         })}
//     </div>
//     </>
    
//   )
// }

// export default App
