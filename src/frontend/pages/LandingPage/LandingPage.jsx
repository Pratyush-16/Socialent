import React from 'react'
import { useNavigate } from 'react-router'

export default function LandingPage() {

    const navigate = useNavigate()



  return (
    <div>

        <h1>Welcome to MY Socials</h1>

        <div>
            <button onClick={()=> navigate('/signup')}>Join us</button>
            <p onClick={()=> navigate('/login')}>ALready have an account ?  Sign In</p>
        </div>
      
    </div>
  )
}
