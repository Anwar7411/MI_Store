import { useEffect,useState } from 'react'
import axios from "axios"
import EachCard from './EachCard'

const AllProducts = () => {
    const[data,setData]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/phones")
        .then((res)=>setData(res.data))
    },[])

  return (
    <div style={{width:"95%",margin:"auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"20px",background:"#f7f7f7"}}>
        {data.length>0 && data?.map((el)=>(
           <EachCard el={el}/>
        ))}
    </div>
  )
}

export default AllProducts