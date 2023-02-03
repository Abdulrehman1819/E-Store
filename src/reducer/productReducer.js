// const ProductReducer=(state,action)=>{
// // if(action.type==="SET_LOADING"){
// //     return{
// //         ...state,
// //         isloading:true
// //         }
// // }
// // if(action.type==="API_ERROR"){
// //     return{
// //         ...state,
// //         isloading:false,
// //         isError:true
// //         }
// // }

// switch(action){
//     case "SET_LOADING":
//         return{
//             ...state,
//            isloading:true 
//         }
//         case "API_DATA":
//                 const featureData=action.payload.filter((currelem)=>{
//                     return currelem.featured==true;
//                 });
                
//                 return{
//                     ...state,
//                     isloading:false,
//                     products:action.payload,
//                     featuredproducts:featureData
//                 }
            
//         case "API_ERROR":
//             return{
//                 ...state,
//            isloading:false,
//            isError:true  
//             }

//             default :return state;
// }
// }
// export default ProductReducer;
const ProductReducer = (state, action) => {
    // if (action.type === "SET_LOADING") {
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // }
  
    // if (action.type === "API_ERROR") {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isError: true,
    //   };
    // }
  
    switch (action.type) {
      case "SET_LOADING":
        return {
          ...state,
          isLoading: true,
        };
  
      case "SET_API_DATA":
        const featureData = action.payload.filter((curElem) => {
          return curElem.featured === "true";
        });
  
        return {
          ...state,
          isLoading: false,
          products: action.payload,
          featureProducts: featureData,
        };
  
      case "API_ERROR":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
        case "SET_SINGLE_LOADING":
            return {
              ...state,
              isSingleLoading: true,
            };
      
            case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };
      
          case "SET_SINGLE_ERROR":
            return {
              ...state,
              isSingleLoading: false,
              isError: true,
            };
      default:
        return state;
    }
  };
  
  export default ProductReducer;