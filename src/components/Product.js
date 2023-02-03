import React from 'react'
import { NavLink } from 'react-router-dom';

const Product = (currelem) => {
    const {id,name,price,image}=currelem;
  return (
   <NavLink to={`/SingleProduct/${id}`}>
<div  className='mt-[20px] w-[200px]'>
 
<img src={image} alt={name} className='w-[100px] left-[500px]'></img>
<div className='' >
{name}
<br></br>
{price}
</div>
</div>

   </NavLink>
  )
}

export default Product
