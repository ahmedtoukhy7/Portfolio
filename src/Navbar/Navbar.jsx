import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
export default function Navbar() {


 
 
  
  useEffect(()=>{
   
  
  

   

   

  },[])
  return <>

<nav className="navbar navbar-expand-lg rounded-5 px-4" id='nav'>
  <div className="container-fluid">
    <a className="navbar-brand logo" href="#">Ahmed Toukhy</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa-solid fa-bars text-light"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className="nav-link active" aria-current="page" href="#hero">About</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="#skills">Skills</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="#contact">Contact Us</a>
        </li>
        
       
      </ul>
     

          
          <label htmlFor="check" className=''>
            <input className="check " type="checkbox" id="check"/>
            <i className='fa-solid fa-moon moon fs-4 text-dark '></i>
           </label>

          
          
      
    </div>
  </div>
</nav>
  
  
  </>
}
