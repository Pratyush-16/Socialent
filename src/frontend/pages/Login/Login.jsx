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
       
        setLoginDetails({...loginDetails,[name]: value})
       
    }
    
    
    
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

    <div className='login-container'>

    
    <div  className='login-form-container'>

      <h2>Login</h2>
      
      <label htmlFor="UserName">UserName :
        <input type='text' 
        name='username'
        value={loginDetails.username}
        onChange={loginClickHandler}
        placeholder='PratyushSingh'/>
      </label>

      <label htmlFor="Password">Password :
        <input type='password'
        name='password'
        value={loginDetails.password}
        onChange={loginClickHandler}
        placeholder='*******' />
      </label>

      <button onClick={clickHandler }>Submit</button>

      <button onClick={testLoginHandler}>Guest Login</button>

      <p onClick={()=> navigate('/signup')}> New User ? Create New Account</p>
      
      
    </div>
    </div>
  )
}
