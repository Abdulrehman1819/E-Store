import React from 'react'
import { NavLink } from 'react-router-dom'

const Listview = ({ products }) => {
  return (

    <div>
      {products.map((elem) => {
        return (
          <div className='flex w-full border-2'>
            <img src={elem.imageUrl} className='w-[100px] object-cover'></img>
            <div className=''>
              <p className='ml-[50px] font-bold'>{elem.name}</p>
              <p className='ml-[50px] font-semibold'>{elem.price}</p>
              <p className='ml-[50px] w-[800px]'>{elem.description.slice(0, 200)}</p>
              <NavLink to={`/SingleProduct/${elem.id}`}>
                <button className='ml-[50px] bg-base-300 p-[5px] mb-[2px]'>Read More</button>
              </NavLink>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Listview
