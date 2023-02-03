import React from 'react'
import { useState } from 'react'

const CartAmountToggle = ({amount,Increment,Decrement}) => {
 
  const inctotalamount=()=>{
Increment();

  }
  return (
//     <div className='flex mt-[10px] p-[10px]'>
//       <button onClick={Increment} className='bg-base-300 p-1 rounded-xl h-[30px] text-center  mr-[10px]  '>+</button>
// <p>{amount}</p>
// <button onClick={Decrement} className='bg-base-300 p-1 rounded-xl h-[30px] w-[20px] ml-[10px]'>-</button>
//     </div>

<div class="form-control">
<label class="input-group">
  <span className='cursor-pointer !px-3' onClick={inctotalamount} >+</span>
  <input type="text" placeholder="10" 
    class="input input-xs input-bordered w-1/5 text-center" 
    value={amount}
  />
  <span className='cursor-pointer !px-3' onClick={Decrement}>-</span>
</label>
</div>
  )
}

export default CartAmountToggle
