import React, { useEffect, useState } from 'react'
import './Cart.css'
import { Link } from 'react-router'
import ProductData from './product'

function Cart() {
  const cart = JSON.parse(localStorage.getItem('cartItems')) || [];

  return (
    <div className='cart'>
      <h1>Your Shopping Cart</h1>
      <div className='emptycart'>
        {cart.length == 0 ? <><p>Your cart is empty </p> <Link to={"/shop"}>Continue Shopping</Link></> :

          <div className='cartitem_Main'>

            {cart.map((item, index) => (
         
                <div className='cartitem' key={index}>
                  <img src={item.img} className='cartitem_image' />
                  <div>
                    {/* {console.log(item.id)} */}
                    <p className='cartitem-title'>{item.title}</p>

                    <div className='cartitem_price'>
                      <p className='discount_price'>{item.discountPrice}</p>
                      <p className='original_price'>{item.originalPrice}</p>
                      <p className='cartitemQuantity'>{item.quantity}</p>
                    </div>

                  </div>
                  <div className='cartitem_quantityandremoveitem'>
                    <input type="Number" min={1} max={10} />
                    <img className='removeitem' src={"https://ishmiherbal.com/assets/p10-Cr-eZbTJ.png"} alt="" />
                  </div>
                </div>
         
            ) )}

          </div>
        }
      </div>




    </div>





  )
}

export default Cart
