import React from 'react'
import { BsFillGrid3X3GapFill, BsList } from "react-icons/bs"
import { useFilterContext } from '../context/FilterContext'
const Sort = () => {
  const { setGridView, setListView, sorting } = useFilterContext();
  return (
    <div className='flex w-full justify-between items-center'>
      <div className='flex w-full'>

        <button className='active:bg-black fill-white' onClick={setGridView}>
          <BsFillGrid3X3GapFill></BsFillGrid3X3GapFill>
        </button>
        <button className='active:bg-black fill-white' onClick={setListView}>
          <BsList></BsList>
        </button>
      </div>

      <div className='flex w-full items-center'>
      <p className='flex'>Total Products</p>
      </div>

      <div className='flex w-full items-center justify-end'>
      
        <select className="select select-ghost max-w-xs" id="sort" onClick={sorting}>
          <option disabled selected className='text-center'>Product</option>
          <option value="Low to High">Price:Low To High</option>
          <option value="High To Low">Price:High To Low</option>
          <option value="A-Z">Product: A-Z</option>
          <option value="Z-A">Product: Z-A</option>
        </select>
      </div>
    </div>
  )
}

export default Sort
