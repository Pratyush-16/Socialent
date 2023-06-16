import React, { useState } from 'react'

export default function Login() {

    const[loginDetails, setLoginDetails] = useState({username:"" ,password:""})

    console.log(loginDetails)

    
    const clickHandler = (event)=> {

    }


  return (
    <div>
      
      <label htmlFor="UserName">UserName :
        <input type='text' 
        name='username'
        value={loginDetails.username}
        placeholder='username'/>
      </label>

      <label htmlFor="Password">Password :
        <input type='password'
        name='password'
        value={loginDetails.password}
        placeholder='password' />
      </label>

      <button onClick={()=>clickHandler()}>Submit</button>
      
      
    </div>
  )
}
