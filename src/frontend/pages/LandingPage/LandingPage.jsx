import React from 'react'
import "./LandingPage.css"
import { useNavigate } from 'react-router'

export default function LandingPage() {

    const navigate = useNavigate()



  return (
    <div className='main-landing-container'>

      <div className='heading'>
      <h1 className='home-title'> MY Socials</h1>
     


      <h2 class="sub-heading">
            <span className='main-sub-heading'>FOLLOW</span><span className='suffix-title'>PEOPLE AROUND THE GLOBE</span>
          </h2>
          <h2 >
            <span className='main-sub-heading'>CONNECT</span> <span className='suffix-title'>WITH YOUR FRIENDS</span>
          </h2>
          <h2  >
            <span className='main-sub-heading'>SHARE</span> <span className='suffix-title'>WHAT YOU THINKING</span>
          </h2>

          <div className='button-container'>
            <button className='button1' onClick={()=> navigate('/signup')}>Join us</button>
            <p className='button2' onClick={()=> navigate('/login')}>ALready have an account ?  Sign In</p>
        </div>

          </div>
        
        

      

        <div className='image-container'>
          <img src="https://i.postimg.cc/wTZ41mnQ/social-media.png" alt="" />
        </div>
      
    </div>

  )
      
}
