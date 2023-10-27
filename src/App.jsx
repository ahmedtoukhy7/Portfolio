import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Skills from './Skills/Skills';
import Tabs from './Tabs/Tabs';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import { useEffect, useState } from 'react';

function App() {

  let [top,setTop]=useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',function(){
     if(window.scrollY > 150){
  setTop(true)
     }
     else{
      setTop(false)
     }
    })

  

  },[])

  return <>

 <div className='container' id="up">
 <Navbar/>

  <Hero/>
  <hr className='text-light' />
  <Skills/>
  <hr className='text-light' />
  <Tabs/>
  <hr className='text-light' />
  <Contact/>
  <hr className='text-light' />
  <Footer/>
 </div>
 
 <a href='#up'  style={{opacity: top ? 1 : 0}} className='top '>
<i className="fa-solid fa-arrow-up text-light"></i>
</a>

 {/* {top ? <a href='#up'  style={{opacity:1}} className='top '>
<i className="fa-solid fa-arrow-up text-light"></i>
</a> : <a href='#up' style={{opacity:0}} className='top '>
<i className="fa-solid fa-arrow-up text-light"></i>
</a>} */}


  
  
  </>
}

export default App;
