import { useEffect,useState } from 'react'
import axios from "axios"
import EachCard from './EachCard'
import Second_Nav  from '../components/Second_Nav'

const AllProducts = () => {
    const[data,setData]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/phones")
        .then((res)=>setData(res.data))
    },[])

  return (
    <div>
      <Second_Nav />
    <div style={{width:"95%",margin:"auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"20px",background:"#f7f7f7",marginTop:"20px"}}>
        {data.length>0 && data?.map((el)=>(
           <EachCard el={el}/>
        ))}
    </div>
    </div>
  )
}

export default AllProducts