import React,{ useState , useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



const User = () => {
    const {id} =useParams()
    const [user,setUser] = useState({})

    useEffect(
        ()=>{
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(
            res=>
            { setUser(res.data)}).catch(err=>{console.log(err)})
        }
    ,[id])


  return (
    <div className='flex flex-col items-center'>
        <h1>name: {user.name}</h1>
        <h2>phon number :{user.phone}</h2>
        <h2>website: {user.website}</h2>
        <h2>address: {user.address.city}, {user.address.street}, {user.address.suite} , {user.address.zipcode} </h2>
        <h2>company: {user.company.name}</h2>

       
    </div>
  )
}

export default User

