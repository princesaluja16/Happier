import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Rating1 from './Rating1';
import { addItem, removeItem } from '../../redux/CartSlice';
import { useDispatch } from 'react-redux'

const ProductDetail = () => {

const dispatch = useDispatch();

const cartItems = useSelector((state) => state.cart.items);



const[singleProduct , setSingleProduct] = useState([]);


const {id} = useParams();
console.log(id, "params");

const product = useSelector((state)=> state.products.allProducts);
console.log(product);

const res = product.filter((im)=> im.id == id);
console.log(res ,"res")



const [isInCart, setIsInCart] = useState(
  cartItems.some((item) => item.id === res[0].id)
);

const handleAddToCart = () => {
  if (!isInCart) {
    dispatch(addItem(res[0]));
  } else {
    dispatch(removeItem(res[0].id));
  }
  setIsInCart(!isInCart);
};




 


  return (
    <main>
    <section>
      <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{res[0].name}</h1>
      <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200"></p>
      <div className="flex flex-wrap justify-around gap-4">
        <div className="max-w-xl my-3">
          <img className="rounded w-[400px] h-[500px] object-cover" src={res[0].image} alt="" />
        </div>
        <div className="max-w-xl my-3 flex flex-col justify-center gap-2">
          <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
            <span className="mr-1">$</span>
            <span className="">{res[0].price}</span>
          </p>
          <div className='mt-2'>
<Rating1 className='mt-6' values={res[0].rating}></Rating1>
</div>
          <p className="my-4 select-none">
            <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span>   
            <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK {res[0].stock}</span>
            {/* <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span> */}
            <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{res[0].brand}</span>
          </p>
          <div>
            <span className='font-semibold dark:text-gray-400'>Colors </span> {
              res[0].colors.map((color)=>{return (<span className="font-semibold text-black border bg-gray-200 rounded-lg px-3 py-1 mr-2">{color}</span> )})
            }
          </div>
          <div className='mt-2'>
            <span className='font-semibold dark:text-gray-400'>Sizes </span> {
              res[0].sizes.map((color)=>{return (<span className="font-semibold text-black border bg-gray-200 rounded-lg px-3 py-1 mr-2">{color}</span> )})
            }
          </div>
          <div className='mt-2'>
            <span className='font-semibold dark:text-gray-400'>Material</span> {
              <span className="font-semibold text-black border bg-gray-200 rounded-lg px-3 py-1 mr-2">{res[0].material}</span>
            }
          </div>

 

          <p className="my-3">
          <button
            onClick={handleAddToCart}
            className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white ${
              isInCart ? "bg-red-600" : "bg-blue-700"
            } rounded-lg hover:bg-${
              isInCart ? "red-800" : "blue-800"
            }`}
          >
            {isInCart ? "Remove From Cart" : "Add To Cart"}{" "}
            <i className="ml-1 bi bi-plus-lg"></i>
          </button>
        </p>
   
          <p className="text-lg text-gray-900 dark:text-slate-200">
          {res[0].longDescription}
          </p>
        </div>
      </div>
    </section>
  </main> 
  )
}

export default ProductDetail
