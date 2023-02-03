const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, color, quantity, products } = action.payload;
      // console.log(
      //   "🚀 ~ file: cartReducer.js ~ line 4 ~ cartReducer ~ product",
      //   product
      // );

      let cartProduct;

      cartProduct = {
        id: id ,
        name: products.name,

        quantity:products.quantity,
        image: products.imageUrl,
        price:products.sortingprice
      };


      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
    if (action.type === "Clear_Cart") {
        return {
          ...state,
          cart: [],
        };
      }
    if (action.type === "REMOVE_ITEM") {
      let updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }
  
    return state;
  };
  
  export default cartReducer;