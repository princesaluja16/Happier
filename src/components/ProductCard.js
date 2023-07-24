import React from 'react'
import { Link } from 'react-router-dom'
import Rating1 from '../pages/Product/Rating1'
import { addItem } from '../redux/CartSlice'
import { useDispatch } from 'react-redux'

const ProductCard = ({product}) => {

const dispatch = useDispatch();




  return (
    <div className='w-[350px] overflow-hidden h-[600px]'>
    <div className="m-3 max-w-sm   bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/productDetail/${product?.id
}`} className="relative" >
            <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">{product.best_seller === true ? ("BEST SELLER"): ('')}</span>
            <div className='h-[350px] overflow-hidden'>
            <img className="rounded-t-lg w-full h-full object-cover" src={product?.image} alt="" />
            </div>
        </Link>
        <div className="p-3">
            
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{product?.name}</h5>
            
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-800">{product?.description}</p>
            
           <Rating1 values ={product?.rating}/>

            <p className="flex justify-between items-center">
                <span className="text-2xl dark:text-gray-700">
                    <span>$</span><span>{product?.price}</span>
                </span>
                <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">Explore More ! <i className="ml-1 bi bi-plus-lg"></i></button>
                {/* <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800">Remove Item <i className="ml-1 bi bi-trash3"></i></button> */}
            </p>
        </div>
    </div>
    </div>
  )
}

export default ProductCard
