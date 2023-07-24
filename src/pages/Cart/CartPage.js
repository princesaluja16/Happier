import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartCard } from './CartCard';
import Modal from "react-modal";
import { clearCart } from '../../redux/CartSlice';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [checkout, setCheckout] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    dispatch(clearCart());
  navigate('/');
  };

const cart = useSelector((state)=>state.cart.items);

const totalPrice = cart.reduce(
  (total, item) => total + item.price,
  0
);

const customStyles = {
  content: {
    width: "300px", // Set the desired width
    height: "150px", // Set the desired height
    margin: "auto", // Center the modal horizontally
    border : "rounded"
  },
};



  return (
    <div>

      

      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          Total Items({cart.length})
        </p>
      </section>
      
      <section>
       { cart.map((product) => (
        <CartCard key={product.id} product={product} />
       )) }
      </section>

      <section className="max-w-4xl m-auto">
        <div className="flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100">
          <p className="flex justify-between my-2">
            <span className="font-semibold">Total Amount:</span>
            <span>${totalPrice}</span>
          </p>
        </div>


        <div className='w-52'>
      {/* <button onClick={openModal}>Open Modal</button> */}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <h2 className='font-bold text-center'>Order Successfully Placed</h2>
        <p className='font-bold text-center'>Thanks for shopping with us !!</p>
        <div className='flex justify-center item-center mt-1'>
        <button  className='border-2 rounded-full p-2 ' onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </div>


        
        <div className="text-right my-5">
          <button onClick={openModal} type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
            PLACE ORDER <i className="ml-2 bi bi-arrow-right"></i>
          </button>
          
        </div>
   
      </section>

  

    </div>
  )
}

export default CartPage
