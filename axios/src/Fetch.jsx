import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
// import Container from 'react-bootstrap/Container';
// import './App.css'

 function Fetch() {
  const [data, setData] = useState([])
    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => setData(res.data))
        .catch(err => console.log(err));

    },[])
  return (
    <div className='Container'>
      
          <h3>Post List </h3>
          <Table striped bordered hover size="sm">
            <thead>
              <tr class="table-primary">
                <th>ID</th>
                <th>title</th>
                <th>body</th>
                
              </tr>
            </thead>
            <tbody class="table-success">
              {
                data.map((user,index) => {
                  return <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.title}</td>
                    <td>{user.body}</td>
                   
                  </tr>
                })
              }
            </tbody>
          </Table>

        </div>
    
  )
}
export default Fetch;