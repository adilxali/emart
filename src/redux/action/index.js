//For Add item to cart
const ADDITEM = "ADDITEM";
const REMOVEITEM = "REMOVEITEM";
const CLEARCART = "CLEARCART";
export const addToCart = (item) => {
  return {
    type: ADDITEM,
    payload: item,
  };
};

//For Remove item from cart
export const removeFromCart = (item) => {
    return {
        type: REMOVEITEM,
        payload: item,
    };
    };
// For Clear cart
export const clearCart = (item) => {
    return {
        type: CLEARCART,
        payload: item,
    };
    };
    