import React from 'react'
import Lottie from "lottie-react";
import contact from '../../src/Animation/animation_lo7521zf.json'
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm("mbjvwppr");
  return <>

  <div className='contact py-5 px-4' id='contact'>
    <h1 className='mt-4 '>Contact Us</h1>
    <p className='contpra mb-2'>Contact us for more information and Get notified when I publish something new.</p>
    <div className='row align-items-center'>
        <div className='col-md-7'>
            <div className='item'>
                <form onSubmit={handleSubmit} action="">
                    <div className='email mb-5'>
                        <label htmlFor="email"  className='me-3 fs-5 d-block mb-4'>Email Address : </label>
                        <input type="text" placeholder='Enter Your Email ..' name='email' id='email' className='emailinput' />
                        <ValidationError 
                              prefix="Email" 
                             field="email"
                             errors={state.errors}
                                 />
                    </div>
                    <div className='message '>
                        <label htmlFor="message"  className='me-3 fs-5 d-block mb-4'>Message : </label>
                        <textarea type="text" placeholder='Enter Your Message ..' name='message' id='message' className='messageinput' />
                        <ValidationError 
                             prefix="Message" 
                             field="message"
                            errors={state.errors}
      />
                    </div>
                    <button type="submit" disabled={state.submitting} className='btn btn-lg btn-secondary my-4 '>
                        {state.submitting ? 'Submitting ..' :'Submit'}
                    </button>
                    {state.succeeded ? <h2> ✔ Thanks for joining 👌</h2> : ''}
                </form>
                


            </div>
        </div>
        <div className='col-md-5'>
            <div className='item'>
            <Lottie animationData={contact} />
            </div>
        </div>
    </div>

  </div>
  
  
  </>
}
