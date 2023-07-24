import { createSlice } from "@reduxjs/toolkit";

export  const  cartSlice = createSlice({
    name: "cart",
    initialState: {
      items: [],
    },
    reducers: {
      addItem: (state, action) => {
        const productToAdd = action.payload;
        state.items.push(productToAdd);
      },
      removeItem: (state, action) => {
        
        const itemIdToRemove = action.payload;
        state.items = state.items.filter((item) => item.id !== itemIdToRemove);
        
      },
      clearCart: (state) => {
        state.items = [];
      },
    },
  });
  
  export const { addItem, removeItem, clearCart } = cartSlice.actions;
  export default cartSlice.reducer;