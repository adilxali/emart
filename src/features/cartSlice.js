import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      const { id } = actions.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        item.qty++;
      } else {
        state.cart.push({ ...actions.payload, qty: 1 });
      }
    },
    removeFromCart: (state, actions) => {
      const { id } = actions.payload;

      const item = state.cart.find((item) => item.id === id);
      if (item.qty === 1) {
        state.cart = state.cart.filter((item) => item.id !== id);
      } else {
        item.qty--;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
