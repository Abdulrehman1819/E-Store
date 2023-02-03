import React, { useState } from 'react'
import Showcart from './Showcart'
import { useCartContext } from '../context/Cartcontext'
import { NavLink } from 'react-router-dom';
const Cart = () => {
    const {cart,clearCart}=useCartContext();
   
    console.log(cart);
    if(cart.length===0){
        return(
            <div className='text-6xl'>
                No Items In Cart
            </div>
        )
    }
  return (
    <div className='container flex flex-col mx-auto max-w-full'>
        <table className='flex w-full justify-center'>
            <thead className='flex w-full'>
                <th className='flex w-full'>Item</th>
                <th className='flex w-full'>Price</th>
                <th className='flex w-full'>Quantity</th>
                <th className='flex w-full'>Subtotal</th>
                <th className='flex w-full'>Remove</th> 
            </thead>
        </table>
   <hr className='w-[800px] ml-[300px] '></hr>
<div>
    {
        cart.map((currelem)=>{
            return <Showcart key={currelem.id} image={currelem.image} id={currelem.id} {...currelem}></Showcart>
        })
    }
    <div className='flex space-x-[600px] mt-[10px]'>
        <button className='bg-base-200 p-[10px] ml-[250px]' onClick={clearCart}>Clear Cart</button>
        <NavLink to='/products'><button className='bg-base-200 p-[10px]'>Continue Shopping</button></NavLink>
    </div>
</div>
    </div>
  )
}

export default Cart
