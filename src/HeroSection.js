import React from 'react'
import BM from './BM.jpg'
import {NavLink } from "react-router-dom"

function HeroSection({mydata}) {
    const {name}=mydata;
  return (
    <div className='container flex w-full'>
        <div className='flex flex-col gap-4 p-4 w-full'>
            <h1 className='text-xl font-semibold'>
              Welcome To  {name}
            </h1>
            <p className='herodata'>
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
            <NavLink to='/products'>
            <button className='bg-blue-400 text-white p-2 rounded w-1/5'>Shop Now</button>
            </NavLink>
            
        </div>
        <div className='w-full'> 
          <img src={BM} className="max-w-screen-sm" ></img>
        </div>
    </div>
  )
}

export default HeroSection
