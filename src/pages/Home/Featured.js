import React  , {useEffect , useState}from 'react'
import ProductCard from '../../components/ProductCard';
import axios from 'axios';
import { Products } from '../../utils/constants';
import { Link } from 'react-router-dom';


const Featured = () => {

  const [featureProducts,setFeatureProducts] = useState([]);






  

  
  
  
  useEffect(()=>{
  
  setFeatureProducts(Products);
  
  },[])


  return (
    <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5  ">Popular Picks</h1>    
        <div className="flex flex-wrap justify-center lg:flex-row">
        {
  featureProducts
    .filter((product) => product.best_seller === true) // Filter products with stock = true
    .slice(5, 8) // Take only the first 3 products that meet the condition
    .map((res) => {
      return <ProductCard key={res?.id} product={res} />;
    })
}
        </div>
        <div className='flex justify-center mt-8'>
        <Link to='/products' type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Explore Products</Link>
        </div>
    </section>
  )
}

export default Featured
