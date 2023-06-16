import React from 'react'
import { useNavigate } from 'react-router'

export default function LandingPage() {

    const navigate = useNavigate()



  return (
    <div>

        <h1>Welcome to MY Socials</h1>

        <div>
            <button onClick={()=> navigate('/login')}>Join us</button>
            <p onClick={()=> navigate('/signup')}>ALready have an account ?  Sign In</p>
        </div>
      
    </div>
  )
}
