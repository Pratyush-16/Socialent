import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Signup() {
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const { signUpHandler } = useContext(AuthContext);

  return (
    <div>
      <label htmlFor="UserName">
        FirstName :
        <input type="text" name="username" placeholder="firstname" />
      </label>

      <label htmlFor="UserName">
        LastName :
        <input type="text" name="username" placeholder="lastname" />
      </label>

      <label htmlFor="UserName">
        UserName :
        <input type="text" name="username" placeholder="username" />
      </label>

      <label htmlFor="UserName">
        Password :
        <input type="text" name="username" placeholder="password" />
      </label>

      <label htmlFor="UserName">
       Confirm Password :
        <input type="text" name="username" placeholder=" confirm password" />
      </label>

      <button>Submit</button>
    </div>
  );
}
