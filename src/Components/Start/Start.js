import React, { useState } from 'react'
import "./Start.css"
const Start = () => {
    const [name,setname]=useState("");

     function handleSubmit(e){
      if (e && e.preventDefault) e.preventDefault();
       window.localStorage.setItem("name",name);
        window.location.href="./app";
     }
  return (
   <div className='bd'>
   <div className='start_bd'>
      <h1>Welcome to Kanban!</h1>
   <input placeholder='Enter your name' onChange={(e)=>setname(e.target.value)}/>
   <button onClick={handleSubmit}>Submit</button>
   </div>
 
   </div>
  )
}

export default Start