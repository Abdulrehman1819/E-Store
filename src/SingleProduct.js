// import React, { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { useProductContext } from "./context/Productcontext";

// const API="http://localhost:3000/getProducts"
// const SingleProduct = () => {
//     const { getSingleProduct, isSingleLoading, singleProduct } =
//     useProductContext();
//     const {id}=useParams();
//     // console.log(singleProduct);
//     // console.log(id);
 
//     useEffect(() => {
//         getSingleProduct(`${API}?id=${id}`);
//         // console.log(singleProduct);
//       }, []);
//   return (
//     <div>
   
//     </div>
//   )
// }

// export default SingleProduct
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useProductContext } from "./context/Productcontext";

// const API="http://localhost:3000/getProducts"

// const SingleProduct = () => {
//   const { getSingleProduct, isSingleLoading, singleProduct } =
//     useProductContext();
//   const { id } = useParams();

//   const {
//     id: alias,
//     name,
//     company,
//     price,
//     description,
//     category,
//     stock,
//     stars,
//     reviews,
//   } = singleProduct;

//   useEffect(() => {
//     getSingleProduct(`${API}?id=${id}`);
    
//   }, []);

//   return <h1>single page {name} </h1>;
// };
// export default SingleProduct;
import { useEffect } from "react";
import Cart from './components/Cart';
import { NavLink, useParams } from "react-router-dom";
import AddtoCart from "./components/AddtoCart";
import Stars from "./components/Stars";
import { useProductContext } from "./context/Productcontext";
import { useCartContext } from "./context/Cartcontext";
const API="http://localhost:3000/getProducts"

const SingleProduct = () => {
  

  const { getSingleProduct, isSingleLoading, singleProduct,products,quantity } =
    useProductContext();

    const { addToCart } = useCartContext();
  const { id } = useParams();

  const {
      name,
      company,
      price,
      description,
      category,
      stock,
      stars,
      reviews,
  } = singleProduct;

  console.log("Single Product: ",singleProduct)
const image=singleProduct?.product?.imageUrl;
console.log(image);
  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  },[]);

  // return <h1>single page {singleProduct?.product?.name}<img src={image} ></img></h1>;
  return(
    <>
    <div className="flex">
<img src={image} className='mt-[25px]'></img>
<div className="mt-[100px] ">
<p className=" font-serif font-extrabold text-2xl">{singleProduct?.product?.name}</p>
<Stars stars={singleProduct?.product?.ratings} reviews={singleProduct?.product?.reviews}></Stars>
{/* <label for="" className="fa-regular fa-star ml-[30px] mt-[20px]"></label>
          <label for="" className="fa-regular fa-star ml-[0px] mt-[20px]"></label>
          <label for="" className="fa-regular fa-star ml-[0px] mt-[20px]"></label>
          <label for="" className="fa-regular fa-star ml-[0px] mt-[20px]"></label>
          <label for="" className="fa-regular fa-star ml-[0px] mt-[20px]"></label> */}
          {/* <p className="mt-[10px]">{singleProduct?.product?.ratings}</p>
          <p className="mt-[10px]">{singleProduct?.product?.reviews}</p> */}
          <p className="font-bold text-xl mt-[10px]">{singleProduct?.product?.price}</p>
          <p className="mt-[10px]">Estimated Deleivery Time 3-4 Days</p>
          <p className="mt-[10px]">Availble: {singleProduct?.product?.quantity>0 ? <span className="font-bold">In Stock</span> :<span className="font-bold">Not Availible</span> }</p>
          <AddtoCart quantity={singleProduct?.product?.quantity}></AddtoCart>

          <NavLink to='/cart' element={<Cart></Cart>}>
          <button type="button" className="text-black bg-base-200 hover:bg-base-200 focus:outline-none focus:ring-4 focus:ring-base-200 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-base-200 dark:hover:bg-base-300 dark:focus:ring-black-800 mt-[30px] ml-[50px]" onClick={()=>addToCart(id,quantity,singleProduct?.product)}>Add To Cart</button>
          </NavLink>


          <hr className="w-[500px] "></hr>
          <p className="mt-[10px] font-medium">Cateogry: {singleProduct?.product?.Category}</p>
</div>

    </div>
    <div className="">
      <p className="font-bold text-2xl">
      Description
      </p>
      <p>{singleProduct?.product?.description}</p>

    </div>
    </>
  )
};



export default SingleProduct;
