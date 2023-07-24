import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard';
import FilterBar from './FilterBar';
import axios from 'axios';
import ProductDetail from './ProductDetail';
import { Link } from 'react-router-dom';
import { Products } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { AllProducts, CategoryProducts, Market ,SearchProducts} from '../../redux/ProductSlice';
import search from '../../assets/search.svg';


const ProductList = () => {

  const dispatch = useDispatch()

  const [searchText , setSearchText] = useState('');

  

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [show, setShow] = useState(false);

  const allProducts = useSelector((state)=> state.products.allProducts);

  const marketProducts = useSelector((state)=> state.products.fullMarket);
  
 
 const category = useSelector((state)=> state.products.categoryProducts);

 const[showItems , setShowItems] = useState();

 const handleProductClick = (productId) => {
  const selectedProduct = marketProducts.find((product) => product.id === productId);
  setSelectedProduct(selectedProduct);
};

// function filterData(searchText, allProd) {
//   const Data = allProd.filter((product) =>
//     product.name.toLowerCase().includes(searchText.toLowerCase())
//   );

//   setShowItems(Data);
// }

function setData(text) {

dispatch(SearchProducts(text))

}


  return (
<main>
        <section className="my-3">
          <div className="my-3 flex justify-between">
            <span className="text-2xl font-semibold dark:text-slate-100 mb-3">All Products ({allProducts.length})</span>
            <span>
              <button onClick={()=> setShow(!show)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700 " type="button"> Filter
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
              </button>
            </span>            
          </div>    

          <div className='flex gap-2 mb-3 justify-center'>
            <input className='w-96 border-4 rounded-full p-1' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}  type='text'></input>
            <img onClick={()=>{setData(searchText) ;  setSearchText("")  } } className='w-8' src={search}></img>
          </div>

          <div className="flex flex-wrap justify-center lg:flex-row">
          {
          category.map((res)=>{
              return(
              <Link to={`/productDetail/${res.id}`}> <ProductCard key={res?.id
                } product={res} onClick={() => handleProductClick(res.id)}/> </Link> 
              )
            })
          }

     {selectedProduct && <ProductDetail product={selectedProduct} />}
          </div>  
        </section>

        {
          show &&  <FilterBar setShow={setShow}/>
        }
        
      </main> 
  )
}

export default ProductList
