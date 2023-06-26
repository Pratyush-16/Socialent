import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import "../Login/Login.css"

export default function Login() {

    const[loginDetails, setLoginDetails] = useState({username:"" ,password:""})

    const{loginHandler} = useContext(AuthContext)
    const navigate = useNavigate();

    console.log(loginDetails)

    const loginClickHandler =(e)=>{
        const {name, value} = e.target;
       // console.log(e.target)
        setLoginDetails({...loginDetails,[name]: value})
       
    }

    // console.log(loginDetails)
    
    const clickHandler =(e)=> {
        const {username, password} = loginDetails;       
        loginHandler(username, password)   
      
    }



    const testLoginHandler = () => {
      setLoginDetails((prev) => ({
        ...prev,
        username: "pratyushsingh",
        password: "pratyushsingh123",
      }));     
    };


  return (
    <div  className='login-form-container'>
      
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

      <button onClick={clickHandler }>Submit</button>

      <button onClick={testLoginHandler}>Guest Login</button>
      
      
    </div>
  )
}
