import React from 'react'
import Marquee from "react-fast-marquee";
import pic from '../../src/Assets/PicsArt_08-17-06.12.15.jpg'
import html from '../../src/Assets/html.ico'
import css from '../../src/Assets/css.png'
import js from '../../src/Assets/js.png'
import boot from '../../src/Assets/boot.jpg'
import ts from '../../src/Assets/ts.png'
import figma from '../../src/Assets/figma.png'
import react from '../../src/Assets/react.png'
import next from '../../src/Assets/next.png'
import saas from '../../src/Assets/saas.png'
import jquery from '../../src/Assets/jquery.png'

export default function Skills() {
  return <>

  <div className='skills px-4 py-5' id='skills'>
    <h1 className='mb-5'>Skills</h1>
    <Marquee  gradient={false}
        speed={100}
        pauseOnClick={true}
        delay={0}
        play={true}
        direction="right">
    
      <div>
      <img className='ms-3' src={html} alt="" />
      </div>
      <div>
      <img className='ms-3 pic' src={css} alt="" />
      </div>
      <div>
      <img className='ms-3 pic' src={js} alt="" />
      </div>
      <div>
      <img className='ms-3 pic' src={saas} alt="" />
      </div>
      <div>
      <img className='ms-3 pic' src={boot} alt="" />
      </div>
      <div>
      <img className='ms-3 pic' src={react} alt="" />
      </div>
      <div>
      <img className='ms-3 pic' src={next} alt="" />
      </div>
      <div>
      <img className='ms-3 pic' src={jquery} alt="" />
      </div>
       
 
</Marquee >
  </div>
  
  
  </>
}
