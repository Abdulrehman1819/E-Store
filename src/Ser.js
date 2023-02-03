import React from 'react'
import {TbTruckDelivery} from "react-icons/tb"
import {MdSecurity} from "react-icons/md"
import{GiReceiveMoney} from "react-icons/gi"
import {RiSecurePaymentLine} from "react-icons/ri"
import './App.css'
function Ser() {
   return (
      <div className='flex gap-6 ml-[250px] mt-[30px] mb-[10px]'>
         <div className='flex flex-col justify-center bg-gray-300 p-6 rounded h-[100px] mt-[40px]'>
            <div className='flex justify-center '>
               <TbTruckDelivery></TbTruckDelivery>
            </div>
            <h6>Super Fast Delievery</h6>
         </div>
      
         <div className='flex flex-col justify-center gap-6'>
            <div className=' bg-gray-300 p-6 rounded'>
               <div className='flex justify-center'>
                  <MdSecurity></MdSecurity>
               </div>
               
               <h6>Non Contact Shipping</h6>
            </div>
            <div className=' bg-gray-300 p-6 rounded'>
               <div className='flex justify-center'>
               <GiReceiveMoney ></GiReceiveMoney>
               </div>
               
               <h6>Money-Back Guranteed</h6>
            </div>
         </div>

         <div className='flex flex-col justify-center bg-gray-300 p-6 rounded h-[100px] mt-[40px]'>
            <div className='flex justify-center'>
               <RiSecurePaymentLine className=''></RiSecurePaymentLine>
            </div>
            <h6>Super Secure System</h6>
         </div>
      </div>
   )
}

export default Ser
