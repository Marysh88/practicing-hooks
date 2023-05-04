import React,{ useState , useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const FetchingData = () => {
    const [users,setUsers] = useState([])

    useEffect(
        ()=>{
            axios.get(`https://jsonplaceholder.typicode.com/users`).then(res=>{setUsers(res.data)}).catch(err=>{console.log(err)})
        }
    ,[])


  return (
    <div className='flex justify-center'>
        <table className='text-left w-[900px] '  >
        <thead>
            <tr>
                <th className='p-[10px]' >ID</th>
                <th className='p-[10px]' >Name</th>
                <th className='p-[10px]' >Email</th>
                <th className='p-[10px]' >UserName</th>
            </tr>
        </thead>
        <tbody>
        {users.map(
        (user)=> (
            <tr  key={user.id} >
            
            <td className='p-[10px] ' >{user.id} </td>
            <td className='p-[10px] '>{user.name}</td>
            <td className='p-[10px] ' >{user.email}</td>
            <td className='p-[10px] '>{user.username}<Link className='bg-[skyblue] p-[2px] hover:bg-[red] rounded-[4px] text-[#fff]'   to={`/fetching-data/${user.id}`}   >...moreInfo</Link></td>
            </tr>
            )
      )}
        </tbody>
    </table>
      
    </div>
  )
}

export default FetchingData
