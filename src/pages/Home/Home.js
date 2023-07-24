import React from 'react'
import Model from '../../assets/averie-woodard-4nulm-JUYFo-unsplash.jpg';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Featured from './Featured';
import Testimonials from './Testimonials';
import Faq from './Faq';
import { Products } from '../../utils/constants';
import { AllProducts , CategoryProducts , Market} from '../../redux/ProductSlice';
import { useDispatch } from 'react-redux';

const Home = () => {

const dispatch = useDispatch();

dispatch(AllProducts(Products));
dispatch(CategoryProducts(Products));


dispatch(Market(Products))


  return (
<main>
    <Hero/>
    <Featured/>
    <Testimonials/>
    <Faq/>
</main>
  )
}

export default Home
