
import {useEffect,useState} from 'react'
import Axios  from 'axios';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';


const App=()=> {
  const [user, setUser]=useState([]);
  useEffect(()=>{
   Axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
      setUser  (res.data) 
   })
  })
  return(
    <div >React-Bootstrap
    <Container >
    
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
           {user.map(user =>{
           return <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
           </tr>

            })}
      </tbody>
    </Table>
    
   </Container>
   </div>
  )
}

export default App;
