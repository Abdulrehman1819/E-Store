import React from "react";
import Product from "./Product";

const Gridview = ({ products }) => {
  return (
   
     <div className="flex flex-wrap w-full space-x-2">
         {products.map((curElem) => {
            return <Product key={curElem.id} image={curElem.imageUrl}{...curElem} />;
         })}
     </div>

      
      
  );
};

export default Gridview
