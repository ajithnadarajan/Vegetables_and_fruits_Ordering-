import React from 'react'
import './App.css';
import { useNavigate } from 'react-router-dom';
export default function Loading() {
  const navigate=useNavigate();
    
  return (
    
        <div className='enterbtn'>
      <span class="hover-underline-animation" onClick={()=>navigate('/home')}> Shop now </span>
      </div>
   
     

 



        
  )
}
