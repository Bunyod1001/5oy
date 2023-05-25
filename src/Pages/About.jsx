
import React, { useState } from 'react'
import Header from '../components/Header/Header'
import { useSelector } from 'react-redux';
import Single from '../components/Single/Single';
import Footer from '../components/Footer/Footer';


export default function About() {

  const productData = useSelector((store) => store.product.product);
  console.log(productData);


  return (
   <>
   <Header/>
  <Single/>
  <Footer/>
</>
  )  
}
