import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./ProductSlice";
import {cartSlice} from "./CartSlice";

export const store = configureStore({
  reducer : {
    products : ProductSlice.reducer,
    cart : cartSlice.reducer,
  }
})