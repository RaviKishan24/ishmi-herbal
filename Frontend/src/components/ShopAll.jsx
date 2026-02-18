import React from 'react'
import shopAllbanner from "../assets/homePage/shopAllbanner.webp"
import './ShopAll.css'
import productData from "./product.js"

function ShopAll() {
    return (
        <div className='shopAllContainer'>
            <div>
                <img className='shopallimg' src={shopAllbanner} alt="" />
            </div>
            <div className='shopallitems'>



                {productData.map((list, index) => (

                    <div className="cards" key={index}>
                        <div className="product_img">
                            <img src={list.img} alt="product" />
                        </div>
                        <h3 className="product_title">{list.title}</h3>
                        <button className="quantity_btn">{list.quantity}</button>

                        <div className="Price">
                            <span className="discount_price">{list.discountPrice}</span>
                            <span className="original_price">{list.originalPrice}</span>
                        </div>
                        <button className="add_to_cart">Add to Cart</button>

                    </div>

                ))}

            </div>


        </div>
    )
}

export default ShopAll
