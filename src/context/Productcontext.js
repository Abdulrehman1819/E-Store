import { createContext,useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from '../reducer/productReducer'
import { current } from "daisyui/src/colors";
import { useParams } from "react-router-dom";
const AppContext=createContext();
const API="http://localhost:3000/getProducts"
// const Appprovider=({children})=>{
//     const initialstate={
//         isloading:false,
//         isError:false,
//         products:[],
//         featuredproducts:[],    
//     }
//     const [state,dispatch]=useReducer(reducer,initialstate);

//     const getproducts=async(url)=>{
//         dispatch({type:"SET_LOADING"})
//         try{
//             const res=await axios.get(url);   
//             const products=res.data;
//             dispatch({type:"API_DATA",payload:products});
//         }
//         catch(error){
// dispatch({type:"API_ERROR"})
//         }

// // console.log(res);
// // console.log(products);
//     }
//     useEffect(()=>{
// getproducts(API);
//     },[])
//     return (
//         <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
//     )

// }
// const useProductContext = () => {
//     return useContext(AppContext);
//   };
// export {AppContext,Appprovider,useProductContext};
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
  singleProduct: {},
  };
  
  const AppProvider = ({ children }) => {
   
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const getProducts = async (url) => {
      dispatch({ type: "SET_LOADING" });
      try {
        const res = await axios.get(url);
        const products = await res.data;
        // console.log(products.filter((currelem)=>{
        //     return currelem.featured==="true";
        // }));
      
        dispatch({ type: "SET_API_DATA", payload: products });
      } catch (error) {
        dispatch({ type: "API_ERROR" });
      }
    };
    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
          const res = await axios.get(url);
          const singleProduct = await res.data;
    console.log(url)
    console.log(singleProduct);
        //  console.log(singleProduct.filter((curelem)=>{
        //     return curelem.id===singleProduct.id;
        //  }))
     
          dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        } catch (error) {
          dispatch({ type: "SET_SINGLE_ERROR" });
        }
      };
    useEffect(() => {
      getProducts(API);
      
    }, []);
   
    return (
      <AppContext.Provider value={{ ...state,getSingleProduct }}>{children}</AppContext.Provider>
    );
  };
  
  // custom hooks
  const useProductContext = () => {
    return useContext(AppContext);
  };
  
  export { AppProvider, AppContext, useProductContext };