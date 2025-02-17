import React from 'react'
import './addToCart.css'
//import RestoMenu from '../../components/RestoMenu/RestoMenu';
import CartPage from '../../components/Cart/CartPage'
import RestaurantHeader from '../..components/Restaurants/RestaurantHeader'

// import {axiosInstance} from '../config/axiosinstance'
// import {toast} from 'react-hot-toast'

 const addToCart = async () => {

  return(

    <div>
        <h1>CART</h1>
        <RestaurantHeader />
        <CartPage />
    </div>


  )

  
};

export default addToCart

