import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    allProducts:[],
    categoryProducts : [],
    fullMarket :[],
    
}


export const ProductSlice = createSlice({
    name:"product",
    initialState,
    reducers : {

     Market : (state , actions) => {
      state.fullMarket = actions.payload
   },

     AllProducts : (state,actions) => {
        state.allProducts = actions.payload
     },

     CategoryProducts : (state,actions) =>{

        state.categoryProducts = actions.payload;
  
 },

 SearchProducts :(state,actions)=>{
   const search = actions.payload;

   state.categoryProducts = state.allProducts.filter((res)=>res.name.toLowerCase().includes(search.toLowerCase()))

 },

 FilterProducts :(state , actions) =>{

    const input = actions.payload;

    state.categoryProducts = state.allProducts.filter((res)=> res.category.toLowerCase() === input.toLowerCase());
 },

 Price : (state, actions) =>{
    const price = actions.payload;

    if(price === 'low') {
      state.categoryProducts =  state.categoryProducts.sort((a,b) => a.price - b.price);
    }
    else {
        state.categoryProducts =    state.categoryProducts.sort((a,b) => b.price - a.price);
    }

 },

 Rating :(state,actions)=>{
    const rating = actions.payload;

  if (rating === '3') {
    state.categoryProducts = state.allProducts.filter((product) => product.rating == 3);
  } else if (rating === '4') {
    state.categoryProducts = state.allProducts.filter((product) => product.rating == 4);
  } 
  else if (rating === '5') {
    state.categoryProducts = state.allProducts.filter((product) => product.rating == 5);
  } 

 },

 BestSeller : (state,actions) =>{
    state.categoryProducts = state.categoryProducts.filter((res)=> res.best_seller === true);
 }


    }

});

export const {AllProducts , CategoryProducts , FilterProducts , Price , Rating , BestSeller , Market , SearchProducts} = ProductSlice.actions;

export default ProductSlice.reducer;