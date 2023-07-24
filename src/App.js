import { Routes , Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import ProductList from './pages/Product/ProductList';
import Header from './components/Header';
import Footer from './components/Footer';
import CartPage from './pages/Cart/CartPage';
import ProductDetail from './pages/Product/ProductDetail';
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className='dark:bg-slate-800'>
      <Header/>
<Routes>

<Route path='/' element={<Home/>}></Route>
<Route path='/products' element={<ProductList/>}></Route>
<Route path='/cart' element={<CartPage/>}></Route>
<Route path='/productDetail/:id' element={<ProductDetail/>}></Route>



</Routes>
<Footer/>

    </div>
  );
}

export default App;
