import { current } from 'daisyui/src/colors';
import React from 'react'
import { useFilterContext } from '../context/FilterContext';
const FilterSection = () => {
  const {
    filters: { text, category, color },
    updateFilterValue,
    all_products,
    clearfiltervalues
  } = useFilterContext();
console.log(all_products);
  // get the unique values of each property
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });
    return (newVal = [ ...new Set(newVal)]);
  };

  // we need to have the individual data of each in an array format
  const categoryData = getUniqueData(all_products, "Category");
  // const companyData = getUniqueData(all_products, "company");
  // const colorsData = getUniqueData(all_products, "colors");
  return (
    <div className='container flex flex-col w-full gap-5'>
        <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="text"
              placeholder="Search"
              value={text}
              onChange={updateFilterValue}
              className='mt-1 ml-2'
            />
        </form>
        <div className='flex flex-col gap-2'>
          <p className='font-bold'>Category</p>
          {categoryData.map((curElem, index) => {
            return (
              <>
                <span></span>
                <button
                key={index}
                type="button"
                name="Category"
                value={curElem}
                className='flex focus:font-bold text-sm px-4'
                onClick={updateFilterValue}>
                  {curElem}
                </button>
              </>
            );
          })}
          <div className='flex justify-center'>
              <button className='btn bg-[#5f99be] border-[#5f99be] text-base-100 btn-sm w-1/2 
                hover:bg-white hover:text-black hover:border-black'
                  onClick={clearfiltervalues}>
                  Clear Filters
              </button>
          </div>
        </div> 
    </div>
  )
}

export default FilterSection
