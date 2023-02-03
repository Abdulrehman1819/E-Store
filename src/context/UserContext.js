// import { createContext, useContext, useReducer } from "react";
// import reducer from '../reducer/UserReducer'
// export const UserContext=createContext();

// export const UserContextProvider=({children})=>{
//     const userdata="http://localhost:3000/users"
//     const initialState={
//         isloggedin:false,
//         username:"",
//         users:[]
//     }
//     const [state,dispatch]=useReducer(reducer,initialState)

//    const checkdata=()=>{
// console.log('che')
//    }
//    return(
// <UserContext.Provider value={{...state,checkdata}}>{children}</UserContext.Provider>
//    );       
// };
// // export const useUserContext=()=>{
// //     useContext(UserContextProvider);
// // }
// export default {UserContextProvider}

import { createContext, useContext, useReducer, useEffect, useState } from "react";
import { useProductContext } from "./Productcontext";
import reducer from "../reducer/UserReducer";
import SetCookie from "../components/SetCookie";
import GetCookie from "../components/GetCookie";
import RemoveCookie from "../components/RemoveCookie";
const UserContext = createContext();


export const UserContextProvider = ({ children }) => {

  const user=JSON.parse(localStorage.getItem('user-Info'))
const [username,setusername]=useState();
const [useremail,setuseremail]=useState();
const [userpassword,setuserpassword]=useState();
const [userimageurl,setuserimageurl]=useState("");
const [userloggedin,setuserloggedin]=useState(false);

const contextcheckdata=(email,name,password,imageurl=null)=>{
  if(userloggedin){
    setuseremail(email);
    setusername(name);
    setuserpassword(password);
    setuserimageurl(imageurl);
  }
  RemoveCookie('userin')
 
   setuserloggedin(true);
}

const Logout=()=>{
  // RemoveCookie('userin')
  // localStorage.clear()
  
  setuseremail("");

  setusername("");
  setuserpassword();
  setuserimageurl();
  setuserloggedin(false);
}


  return (
    contextcheckdata && (
        <UserContext.Provider
            value={{
                contextcheckdata,
                username,
                userpassword,
                userimageurl,
                useremail,
                userloggedin,
                Logout
            }}>
            {children}
        </UserContext.Provider>
    )
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};