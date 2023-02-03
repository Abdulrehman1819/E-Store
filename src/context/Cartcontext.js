import { createContext, useContext, useReducer, useState } from "react";
import reducer from "../reducer/Cartreducer";
import { useEffect } from "react";
const CartContext = createContext();


const getLocalCartData = () => {
  let localCartData = localStorage.getItem("Cart"); // []
  
  if (localCartData === [] || localCartData == null) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  cart: getLocalCartData(),
// cart: getLocalCartData(),
  total_item: 0,
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
 
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state.cart);
  let length=state.cart?.length;

  const [totalitemsincart,setitems]=useState(length);
  const addToCart = (id, quantity, products) => {
    console.log('Add To Cart');
    console.log(products);
    dispatch({ type: "ADD_TO_CART", payload: { id, quantity, products } });
  };
  const clearCart=()=>{
    dispatch({type:"Clear_Cart"})
    
}
const delitemsincart=()=>{
  setitems(totalitemsincart-1);

}
  const removeItem = (id) => {
    
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const additemincart=()=>{
    setitems(totalitemsincart+1);
    console.log('Cart context',totalitemsincart);
  }

  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    localStorage.setItem("Cart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem,clearCart,additemincart,totalitemsincart,delitemsincart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
