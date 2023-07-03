import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Signup() { 
  
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const { signUpHandler } = useContext(AuthContext);

  const signUpClickHandler = (e) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  };

  const clickHandler =  () => {
    const { firstName, lastName, userName, email, password, confirmPassword } =
      signUpData;
     signUpHandler(
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmPassword
    );
  
  };

  return (
    <div>
      <label htmlFor="FirstName">
        FirstName :
        <input
          type="text"
          name="firstName"
          placeholder="firstname"
          value={signUpData.firstName}
          onChange={signUpClickHandler}
        />
      </label>

      <label htmlFor="LastName">
        LastName :
        <input
          type="text"
          name="lastName"
          value={signUpData.lastName}
          placeholder="lastname"
          onChange={signUpClickHandler}
        />
      </label>

      <label htmlFor="UserName">
        UserName :
        <input
          type="text"
          name="userName"
          value={signUpData.userName}
          placeholder="username"
          onChange={signUpClickHandler}
        />
      </label>

      <label htmlFor="Email">
        Email :
        <input
          type="email"
          name="email"
          value={signUpData.email}
          placeholder="email"
          onChange={signUpClickHandler}
        />
      </label>

      <label htmlFor="Password">
        Password :
        <input
          type="text"
          name="password"
          value={signUpData.password}
          placeholder="password"
          onChange={signUpClickHandler}
        />
      </label>

      <label htmlFor="ConfirmPassword">
        Confirm Password :
        <input
          type="text"
          name="confirmPassword"
          placeholder=" confirm password"
          value={signUpData.confirmPassword}
          onChange={signUpClickHandler}
        />
      </label>

      <button onClick={clickHandler}>Submit</button>
    </div>
  );
}
