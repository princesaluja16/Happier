import React , {useEffect , useState} from 'react'
import LOGO from '../Artboard+2+copy.png';
import { Link } from 'react-router-dom';
import Moon from '../../src/assets/moon.svg';
import Cart from '../../src/assets/shopping-cart.svg';
import User from '../../src/assets/user(1).svg';
import { useSelector } from 'react-redux';

import shop from '../../src/assets/shopping-bag.svg';


const Header = () => {

const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

const cart = useSelector((state)=>state.cart.items);


useEffect(() => {
  localStorage.setItem("darkMode", JSON.stringify(darkMode));
  
  if(!darkMode){
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);

  return (
    <header>

<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link to='/' className="flex items-center">
            <img src={LOGO}   className="h-8 w-10 borded-2 rounded-full mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">HAPPIER</span>
        </Link>
        <div className="flex items-center gap-4 relative">
 
         <img className='w-7 cursor-pointer text-gray-700 dark:text-white' src={Moon} onClick={() => setDarkMode(!darkMode)}/> 

         <Link to='/products'><img className='w-7 cursor-pointer text-gray-700 dark:text-white' src={shop}></img></Link>
         
       <Link to='/cart'> <img src={Cart} className='w-7 cursor-pointer text-gray-700 dark:text-white'/></Link>
       <Link to='/cart'>   <span class="text-white text-sm absolute -top-1 right-4 bg-rose-500 px-1 rounded-full ">{cart.length}</span></Link>
         <img src={User} className='w-7 absolute top-0.5 -right-5 cursor-pointer text-gray-700 dark:text-white'/> 
         
           
        </div>
    </div>
</nav>


      
    </header>
  )
}

export default Header
