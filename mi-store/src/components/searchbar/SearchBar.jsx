import React, { useCallback, useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useThrottle } from 'use-throttle';
import '../navbar&footer/Navbar.css'
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
   const [data,setData]=useState([]);
   const [suggestion,setSuggestion]=useState([]);
   const [quaery,setQuaery]=useState("");
   const [inputText,setInputText]=useState("");
   const [select,setSelect]=useState(false);
   const navigate = useNavigate()

  const quaeryHandler=useCallback((val)=>{
    setQuaery(val);
  },[]);

  const throttleText=useThrottle(inputText,1000)

   useEffect(()=>{
    axios.get("http://localhost:8080/search")
    .then((res)=>{
       setData(res.data)
    }).catch((err)=>{
        console.log(err)
    })
   },[])

   useEffect(()=>{
    quaeryHandler(throttleText)
},[quaeryHandler,throttleText])

   useEffect(()=>{
    if(quaery==""){
      setSuggestion([]);
    }else{
      const newSuggestion=data.filter((item)=>{
        return item.title.toLowerCase().indexOf(quaery)!==-1?true:false
      }).map(item=>item);
      newSuggestion.splice(5)
      setSuggestion(newSuggestion)
    }
  },[quaery])
  window.addEventListener('mouseup',function(event){
    var sugest = document.getElementById('sugest');
    if(event.target != sugest && event.target.parentNode != sugest){
        setInputText("");
        setSelect(false)
    }
});  

const handlesearch=(id)=>{
    console.log(id)
    navigate(`/singleproduct/${id}`)
}

  return (
    <div className="searchbar">
       
        <input type="text" value={inputText} onChange={(e)=>{setSelect(true);setInputText(e.target.value)}} />
       
        <div >
           {select ? 
           <div id="sugest">{
            suggestion.map((item)=>{
                return <div onClick={()=>{console.log("item",item);handlesearch(item._id)}}>{item.title}</div>
                }) 
            }</div>
            : null }
        </div>
        
       
    </div>
  )
}

export default SearchBar