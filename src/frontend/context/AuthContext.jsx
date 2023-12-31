import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("login"));
 // const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const [token, setToken] = useState(localStorageToken?.token);
  const [user, setUser] = useState(localStorageToken?.user);
  // const [userInfo, setUserInfo] = useState(localStorage?.userInfo);



  const navigate = useNavigate()
  const loginHandler = async (username, password) => {
  
    try {
        const {
          data: { foundUser, encodedToken },
          status,
        } = await axios.post("api/auth/login",{
            username: username,
            password: password,
        })

        if (status === 200 || status === 201) {
          localStorage.setItem(
            "login",
            JSON.stringify({ token: encodedToken, user: foundUser })
          );
          setToken(encodedToken);         
          setUser({...foundUser});
          navigate("/")
        }

        
      } catch (e) {
        console.log("login error");
      }}
    // try {
    //   const result = await axios.post("/api/auth/login", {
    //     username,
    //     password,
    //   });
    //   console.log(result);
    //   localStorage.setItem(
    //     "users",
    //     JSON.stringify({
    //       encodedToken: result.data.encodedToken,
    //       userInfo: result.data.foundUser,
    //     })
    //   );
    //   setToken(result.data.encodedToken);
    //   setUser(result.data.userInfo);
//     localStorage.setItem(
//         "login",
//         JSON.stringify({ token: encodedToken })
//       );
//       setToken(encodedToken);
//       localStorage.setItem("user", JSON.stringify({ user: foundUser }));
//       setUser(foundUser);
      
     

//     } catch (err) {
//       console.log(err);
//     }
//   };

  const signUpHandler = async (firstName, lastName, email, password) => {
    try {
      const {
        status,
        data: { createdUser, encodedToken },
      } = await axios.post("/api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });

      if (status === 201 || status === 200) {
        localStorage.setItem(
          "login",
          JSON.stringify({
            token: encodedToken,
            user: createdUser,
          })
        );
        
        setUser(createdUser);
        setToken(encodedToken);

       navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("login");
    setToken();
    setUser();
    
  };



  return (
    <AuthContext.Provider
      value={{ token, setToken, user, setUser, loginHandler,signUpHandler, logoutHandler}}
    >
      {children}
    </AuthContext.Provider>
  );
};
