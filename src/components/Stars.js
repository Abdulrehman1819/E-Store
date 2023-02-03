import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const Stars = ({stars,reviews}) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        debugger;
        return (
          <span key={index}>
            {stars >= index + 1 ? (
              <FaStar style={{color:"orange"}}/>
            ) : stars >= number ? (
              <FaStarHalfAlt style={{color:"orange"}} />
            ) : (
              <AiOutlineStar />
            )}
          </span>
        );
      });
  return (  
    
      
          <div className="icon-style flex">
            <div className='mt-[10px] flex'>
            {ratingStar}
            </div>
         
            <p className='ml-[10px] mt-[10px]'>({reviews} customer reviews)</p>
          </div>
      
      );
  
}

export default Stars
