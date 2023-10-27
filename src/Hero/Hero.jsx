import React from 'react'
import pic from '../../src/Assets/PicsArt_08-17-06.12.15.jpg'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom'
import Lottie from "lottie-react";
import developAnmi from '../../src/Animation/animation_lo5tpbb5.json'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";


export default function Hero() {
  return <>

  <div className='hero px-4 py-5' id='hero'>
    <h1 className='aboutme mb-5'>About Me</h1>
    
        <div className='row align-items-center'>
            <div className='col-md-7'>
                <div className='item'>
                    <img className='pic' src={pic} alt="" />
                    <h1 className='my-4'>
                    <Typewriter
  options={{
    strings: ['React Js Developer', 'UI Developer', 'Frontend Developer' ],
    autoStart: true,
    loop: true,
  }}
/>
</h1>

        <p className=''>I’m a front-end web developer with a strong passion for creating visually appealing and user-friendly web applications. I am very passionate about improving my coding skills & developing applications & websites. I have also gained a solid foundation in HTML5, CSS3, JavaScript, Bootstrap, React.js,Redux-toolkit ,Context , Next.js, GitHub, Responsive Web Design Compatibility, Git&GitHub, Teamwork</p>

        <div className='social'>
        <a href="https://www.linkedin.com/in/ahmed-el-toukhy-75a35a25a" target='_blank' >
        <BsLinkedin className="icon fa-2x" />
        </a>
       <a href="https://github.com/ahmedtoukhy7" target='_blank'>
       <BsGithub className="icon fa-2x mx-4" />
       </a>
       <a href="https://www.facebook.com/profile.php?id=100005380309021" target='_blank'>
       <BsFacebook className="icon fa-2x" />
       </a>
        </div>
        <a href="https://drive.google.com/file/d/1nhy7h_l8Aj7UVZAJcNHdJfCRfxV0CLQJ/view?usp=drive_link">
        <button className='btn btn-secondary my-4 btn-lg'>Download Cv</button>
        </a>

       


                  
         </div>

     </div>
<div className='col-md-5'>
<div className='item'>
    <div className='animat'>
    <Lottie animationData={developAnmi} />
    </div>
</div>
      </div>
        </div>
    </div>
 


  
  
  </>
}
