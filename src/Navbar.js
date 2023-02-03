import React, { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi';
import {NavLink } from "react-router-dom"
import GoogleLogout from './components/GoogleLogout';
import {Logout} from './components/Logout';
import ShowLogout from './components/ShowLogout'
import UserProfile from './components/UserProfile';
import { useCartContext } from './context/Cartcontext';
import {useUserContext} from './context/UserContext'
function NavBar() {
  const [stateAuth,setstateAuth]=useState();
  const response=(res)=>{
setstateAuth(res);
  }
  let [amount, setAmount] = useState(0)
  const {username,useremail,userpassword,userloggedin,Logout}=useUserContext();
  const { removeItem, total_item,additemincart,delitemsincart,totalitemsincart} = useCartContext();
  const user=JSON.parse(localStorage.getItem('user-Info'))
  const getLocalAmount = () => {
    let localAmount = localStorage.getItem("amount");
    console.log("localAmount: ", localAmount)
    if (localAmount == 0 || localAmount == null) {
      setAmount(0)
    } else {
      console.log("Local Amount: ", JSON.parse(localAmount))
      const amt = JSON.parse(localAmount)
      setAmount(amt)
    }
  };
function logout(){
localStorage.clear();
}
  // const {total_item,totalitemsincart}=useCartContext();
  return (
    <div className='container bg-gray-300 max-w-full flex w-full justify-between items-center'>
        <div className='w-full'>
          <p>Home Material Solutions For You</p>
        </div>

        <div className='flex gap-7 w-full justify-center'>
            <NavLink to='/' className="hover:font-bold hover:text-[#5f99be]">
              Home
            </NavLink>
        
            <NavLink to='/CME' className="hover:font-bold hover:text-[#5f99be]">
             Material Estiamtion
            </NavLink>
            <NavLink to='/products' className="hover:font-bold hover:text-[#5f99be]">
              Products
            </NavLink>
            <NavLink to='/contact' className="hover:font-bold hover:text-[#5f99be]">
              Contact
            </NavLink>
        </div>
   
        <div className='flex items-center justify-end w-full gap-6'>
          
            {
             userloggedin ?<div>
              
                <UserProfile></UserProfile>
              
             </div> : <NavLink to='/Login'>Login</NavLink>
            }
    {
    userloggedin ? <button className="btn btn-outline btn-info" onClick={Logout}>Logout</button> : Logout
    
    }
          
          <div className='flex'>
            <NavLink to='/cart' className="flex items-center">
                <FiShoppingCart />
                <sup>{totalitemsincart}</sup>
            </NavLink>
          </div>
        </div>
      </div>
     
   
  )
}

export default NavBar
