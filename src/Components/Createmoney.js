import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


 export function Createmoney() {
        const [data,setData] = useState(null);

useEffect(()=>{
          const balance = async() => {
         await axios.get("https://money-manager-backend-rlq0.onrender.com/economy/")
          .then((res)=> {
            console.log(res.data)
            setData(res.data)
          })
        }
      balance()

},[]);

  console.log(data)

  const deletepost = async id =>{
     await axios.delete(`https://money-manager-backend-rlq0.onrender.com/economy/delete/${id}`)
      
        .then((res)=> console.log(res.data))
        .catch((err)=>console.log(err))
        window.location.reload();
  }
return (
    
<div className='container'>
<table className="table mt-5">

<thead>
    <tr>
      
      <th scope="col">S.NO</th>
      <th scope="col">topic</th>
      <th scope="col">categories</th>
      <th scope="col">division</th>
      <th scope="col">date</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>

  <tbody>
  {
     data && data.map((post,index)=>(
      
    <tr>
      <th scope="row">{index+1}</th>
      <td>{post.topic}</td>
      <td>{post.categories}</td>
      <td>{post.division}</td>
      <td>{post.date.substring(0, 10)}</td>
      <td> <Link to ={`/edit/${post._id}`}  ><button className='btn btn-primary mx-2'>Edit</button></Link> 
      <button className='btn btn-primary mx-2' onClick={() => deletepost(post._id)}>Delete</button></td>
    </tr>
     ))
}
  </tbody>
</table>
</div>
)
}

// export  Createmoney;