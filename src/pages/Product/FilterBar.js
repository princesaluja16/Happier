import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AllProducts , CategoryProducts , FilterProducts , Price  , Rating , BestSeller} from '../../redux/ProductSlice';
import { Products } from '../../utils/constants';
import { useState } from 'react';

const FilterBar = ({setShow}) => {

const dispatch = useDispatch();

const [selectedPrice, setSelectedPrice] = useState("");
const [selectedRating, setSelectedRating] = useState("");
const [selectedCategory, setSelectedCategory] = useState("");
const [sell , setBestSeller] = useState('');

function handleChange(event) {
  const selectedCategory = event.target.value;
  setSelectedCategory(event.target.value)
  if (selectedCategory === 'all') {
    dispatch(CategoryProducts(Products));
  } else {
    dispatch(FilterProducts(selectedCategory));
  }

};

function priceChange(event) {
  const selectedPrice = event.target.value;
  setSelectedPrice(event.target.value);



 dispatch(Price(selectedPrice))

};

function ratingChange(event) {
  const selectedRating = event.target.value;
  setSelectedRating(event.target.value)
  
  dispatch(Rating(selectedRating))
};

function bestSeller() {
dispatch(BestSeller());
setBestSeller(true)
}

function clearFilter() {
  setSelectedPrice('');
  setSelectedRating('');
  setSelectedCategory('');
  setBestSeller('');
  dispatch(CategoryProducts(Products))
}


  return (
<section className="filter">
        <div id="drawer-disable-body-scrolling" className={`fixed z-40 h-screen p-5 overflow-y-auto bg-white w-72 dark:bg-gray-800 transition-transhtmlForm left-0 top-0 transhtmlForm-none`} tabIndex="-1" aria-labelledby="drawer-disable-body-scrolling-label" aria-modal="true" role="dialog">
                <h5 id="drawer-disable-body-scrolling-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-800">Filters</h5>
                <button onClick={()=>setShow(false)} type="button" data-drawer-dismiss="drawer-disable-body-scrolling" aria-controls="drawer-disable-body-scrolling" className="text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-black">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close Filters</span>
                </button>
                <div className="border-b pb-3"></div>
            <div className="py-4 overflow-y-auto">
                <ul className="text-slate-700 dark:text-slate-700">
                  <li className="mt-1 mb-5">
                  <p className="font-semibold my-1">Categories</p>                      
                    <div className="flex items-center my-1">
                        <input onChange={handleChange} checked={selectedCategory === 'all'} id="all" type="radio" value="all"  name="category" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="all" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500">All</label>
                    </div>
                    <div className="flex items-center my-1">
                        <input onChange={handleChange} checked={selectedCategory === 'men'} id="men" type="radio" value="men" name="category" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="men" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500">Men</label>
                    </div>
                    <div className="flex items-center my-1">
                        <input onChange={handleChange} checked={selectedCategory === 'women'} id="women" type="radio" value="women" name="category" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="women" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500">Women</label>
                    </div>
                    <div className="flex items-center my-1">
                        <input onChange={handleChange} checked={selectedCategory === 'children'} id="children" type="radio" value="children" name="category" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="children" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500">Children</label>
                    </div>
                    <p className="font-semibold my-1">Sort by</p>                      
                    <div className="flex items-center my-1">
                        <input onChange={priceChange} checked={selectedPrice === "low"} id="low" type="radio" value="low" name="price" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="low" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500">Price - Low to High</label>
                    </div>
                    <div className="flex items-center my-1">
                        <input onChange={priceChange} checked={selectedPrice === "high"} id="high" type="radio" value="high" name="price" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="high" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500">Price - High to Low</label>
                    </div>
                  </li>
                  <li className="mt-1 mb-5">
                    <span className="font-semibold">Rating</span>
                    
                    <div className="flex items-center my-1">
                        <input  onChange={ratingChange} checked={selectedRating === '5'} id="rating-sort-2" type="radio" value="5" name="rating-sort" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="rating-sort-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500">5 Stars</label>
                    </div>
                    <div className="flex items-center my-1">
                        <input  onChange={ratingChange} checked={selectedRating === '4'} id="rating-sort-3" type="radio" value="4" name="rating-sort" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="rating-sort-3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500">4 Stars</label>
                    </div>
                    <div className="flex items-center my-1">
                        <input onChange={ratingChange} checked={selectedRating === '3'} id="rating-sort-4" type="radio" value="3" name="rating-sort" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="rating-sort-4" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500">3 Stars </label>
                    </div>
                  </li>
                  <li className="mt-1 mb-5">
                    <span className="font-semibold">Other Filters</span>
                    <div className="flex items-center my-1">
                        <input onChange={bestSeller} checked={sell === true } id="best-seller" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="best-seller" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500">Best Seller Only</label>
                    </div>

                  </li>
                  <li className="mt-1 mb-5 px-1">
                    <button onClick={clearFilter} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-black dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Clear Filter</button>
                  </li>
                </ul>
            </div>
        </div>                   
    </section>
  )
}

export default FilterBar
