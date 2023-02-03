import { useEffect, useState } from "react"
import axios from "axios";
import { NavLink } from "react-router-dom";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import ProductList from './components/ProductList'
import { useFilterContext } from "./context/FilterContext";
export function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/getProducts")
            .then((response) => {
                setProducts(response.data)
            })
            .catch((err) => console.log(err));
    }, [])
const {filterproducts}=useFilterContext();

  return (
    // <div className="container flex-wrap w-full ml-[50px]">
    //     {products && products.map((product , i)=> (
    //         <div className="card w-1/3 bg-base-100 shadow-xl">
    //         <figure className="px-10 pt-10">
    //           <img src={product.imageUrl} alt="image" className="rounded-xl" />
    //         </figure>
    //         <div className="card-body items-center text-center">
    //           <h2 className="card-title">{product.name}</h2>
    //           <p>If a dog chews shoes whose shoes does he choose?</p>
    //           <div className="card-actions">
    //             <button className="btn btn-primary">Buy Now</button>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
        

    // </div>
//     <div className="flex flex-row flex-wrap space-x-7  mt-[150px] ml-[350px]">
//     {products && products.map((product,i)=>(
    
// <div className="cards bg-base-100 shadow-xl mt-[10px] mr-[10px]">
// <figure>
//   <NavLink>
//   <img src={product.imageUrl} alt="image" className="rounded-xl h-[200px] w-[300px]"></img>
//   </NavLink>

// </figure>
// <div className ="textcontent flex space-x-[35px] font-medium">
//   <div>
//   {product.name}
//   </div>
//  <div>{product.price}</div>

//   </div>
// </div>
      
//     ))}
//    </div>
  <>
      <div className="flex w-full">
        <div className="flex w-1/4">
          <FilterSection></FilterSection>
        </div>
        <div className="flex flex-col items-center w-full">
          <Sort></Sort>
          <ProductList products={filterproducts}></ProductList>
        </div>
      </div>
  </>
  )
}

export default Products
