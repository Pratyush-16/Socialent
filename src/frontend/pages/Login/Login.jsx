import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'

export default function Login() {

    const[loginDetails, setLoginDetails] = useState({username:"" ,password:""})

    const{loginHandler} = useContext(AuthContext)

    console.log(loginDetails)

    const loginClickHandler =(e)=>{
        const {name, value} = e.target;
       // console.log(e.target)
        setLoginDetails({...loginDetails,[name]: value})
       
    }

    console.log(loginDetails)
    
    const clickHandler =()=> {
        const {username, password} = loginDetails;
        // e.preventDefault();
        loginHandler(username, password)
    }


  return (
    <div>
      
      <label htmlFor="UserName">UserName :
        <input type='text' 
        name='username'
        value={loginDetails.username}
        onChange={loginClickHandler}
        placeholder='username'/>
      </label>

      <label htmlFor="Password">Password :
        <input type='text'
        name='password'
        value={loginDetails.password}
        onChange={loginClickHandler}
        placeholder='password' />
      </label>

      <button onClick={()=> clickHandler()}>Submit</button>
      
      
    </div>
  )
}
