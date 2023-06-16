import React, { useState } from 'react'

export default function Login() {

    const[loginDetails, setLoginDetails] = useState({username:"" ,password:""})

    console.log(loginDetails)

    const loginHandler =(e)=>{
        const {name, value} = e.target;
        setLoginDetails({...loginDetails,[name]: value})
    }
    
    const clickHandler = ()=> {
        const {username, password} = loginDetails;
    }


  return (
    <div>
      
      <label htmlFor="UserName">UserName :
        <input type='text' 
        name='username'
        value={loginDetails.username}
        onChange={loginHandler}
        placeholder='username'/>
      </label>

      <label htmlFor="Password">Password :
        <input type='password'
        name='password'
        value={loginDetails.password}
        onChange={loginHandler}
        placeholder='password' />
      </label>

      <button onClick={clickHandler}>Submit</button>
      
      
    </div>
  )
}
