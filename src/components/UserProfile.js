import React from 'react'
import {useUserContext} from '../context/UserContext'
const UserProfile = () => {
    const {useremail, username ,userpassword, userimageurl,userloggedin,Logout}=useUserContext();
  return (
  <div className="flex w-full items-center gap-3">

<div className="dropdown">
  <label tabIndex={0} className="btn p-0">
  <div className="avatar">
    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
      <img src={userimageurl}  className='h-[100px]'/>
    </div>
  </div>

  </label>

  <ul tabIndex={0} className="dropdown-content !fixed menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>User Profile</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>

      <div className="flex w-full">
          <span className="text-sm font-semibold uppercase">{userloggedin? useremail :console.log('Login forst')}</span>
      </div>
  </div>
  )
}

export default UserProfile
