import React, { useEffect } from 'react'
import AddtoCart from './AddtoCart'
import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { useCartContext } from '../context/Cartcontext'
import CartAmountToggle from './CartAmountToggle'
import { useProductContext } from '../context/Productcontext'
import { NavLink } from 'react-router-dom'
const Showcart = ({ id, name, quantity, image, price }) => {
  

    const { removeItem, total_item,additemincart,delitemsincart} = useCartContext();
    const { products } = useProductContext();
    const [totalamount,settotalamount]=useState(1);
    const getlocalitems=()=>{
        let amounts=localStorage.getItem('amount');
        if(amounts){
            return JSON.parse(localStorage.getItem('amount'))
        }
        else {
            return []
        }
    }
    const [amount, setamount] = useState(1);
    useEffect(()=>{
        localStorage.setItem('amount',JSON.stringify(amount))
    },[amount])
   
    
    const Decrement = () => {
        amount > 1 ? setamount(amount - 1) : setamount(1);
       
        amount > 1 ?  delitemsincart() : console.log('No');
    }
    const Increment = () => {
        amount < quantity ? setamount(amount + 1) : setamount(quantity);
  
  amount < quantity ? additemincart() : console.log('No');
  console.log(id);
    }
    const removefromcart = () => {
        removeItem(id);
    }
    return (
        <div>
            <table className='flex w-full justify-center items-center'>
                <tbody className='flex w-full py-3'>
                    <td className='flex w-full'>
                        <img src={image} className='w-[50px]'></img>
                        <p>{name}</p>
                    </td>
                    <td className='flex w-full'>
                        <p>{price}</p>
                    </td>
                    <td className='flex w-full items-start'>
                    <div class="form-control">
<label class="input-group">
  <span className='cursor-pointer !px-3' onClick={Increment} >+</span>
  <input type="text" placeholder="10" 
    class="input input-xs input-bordered w-1/5 text-center" 
    value={amount}
  
  />
  <span className='cursor-pointer !px-3' onClick={Decrement}>-</span>
</label>
</div>
                    </td>
                    <td className='flex w-full'>
                        {amount * price}
                    </td>
                    <td className='flex w-full'>
                        <FaTrashAlt onClick={removefromcart}></FaTrashAlt>
                    </td> 
                </tbody>
            </table>
           
        </div>

        // <div>
        //     <div className='flex space-x-20 space-y-5' >
        //         <figure className=' ml-[280px] mt-[10px] flex'>
        //             <img src={image} className='w-[50px]'></img>
        //             <p className='mt-[10px] w-[100px] h-[10px]'>{name}</p>
        //         </figure>
        //         <p className=' mt-[10px]'>{price}</p>
        //         <div>
        //             <CartAmountToggle amount={amount} Decrement={Decrement} Increment={Increment}></CartAmountToggle>
        //         </div>
        //         <div className='mt-[10px]'>
        //             {amount * price}
        //         </div>
        //         <div className=''>
        //             <FaTrashAlt className='ml-[80px] mt-[10px]' onClick={removefromcart}></FaTrashAlt>
        //         </div>
        //         <div>

        //         </div>
        //     </div>
        //     <div>
        //     </div>
        // </div>

    )
}

export default Showcart
