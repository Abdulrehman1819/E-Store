import React, { useState } from 'react'
import CartAmountToggle from './CartAmountToggle'

const AddtoCart = ({quantity}) => {
    console.log(quantity)
    const[amount,setamount]=useState(1);
    const Decrement=()=>{
        amount>1 ? setamount(amount-1) :setamount(1);
    }
    const Increment=()=>{
amount<quantity? setamount(amount+1): setamount(quantity);  
    }
  return (
    <div>
      <CartAmountToggle amount={amount} Decrement={Decrement} Increment={Increment}></CartAmountToggle>
    </div>
  )
}

export default AddtoCart
