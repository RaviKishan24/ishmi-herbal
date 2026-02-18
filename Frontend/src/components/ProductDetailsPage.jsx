import React from 'react'
import ProductData from './product';
import "./ProductDetailsPage.css"
import { useParams } from 'react-router-dom'


function ProductDetailsPage() {

    const { slug } = useParams(); // when a user click on any product the product 
    // slug is pass thorugh params and then use params   will extract slug from url 

    const product = ProductData.find((item) => item.slug === slug)
    if (!product) {
        console.log("Prodct is not found")
    } else {
        console.log("product is", product)
    }
    return (

        <div className='productdetailspage'>
            <div className="ProductDetailsContainer">

                <div className="Productimage_section">
                    <div className="Productdetailsimg">
                        <img src={product.img} alt={product.title} />
                    </div>
                </div>

                <div className="proudctdetails_section">
                    <h1 className="product_title">{product.title}</h1>

                    <div className="static_review">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                       
                    </div>
                    <div>Ishmi Root Lock Shampoo blends 50% coconut milk with Keratin, Panthenol, and essential oils to deeply nourish hair, reduce hair fall, and restore shine. Perfect for daily use to promote stronger, healthier, and revitalized hair from root to tip</div>

                    <div className="price_section">
                        <p className="discount_price">{product.discountPrice}</p>
                        <del className="original_price">{product.originalPrice}</del>
                        <span className="offer">11% OFF</span>
                    </div>

                    <div className="size_section">
                        <p>Select Size</p>
                        <button className="size_btn">{product.quantity}</button>
                    </div>

                    <div className="action_buttons">
                        <button className="add_cart">Add to Cart</button>
                        <button className="buy_now">Buy Now</button>
                    </div>

                    <div className="secondary_actions">
                        <button>❤️ Add to wishlist</button>
                        <button>👍 Share this product</button>
                    </div>

                    <ul className="product_features">
                        <li>✔ 100% Original Product</li>
                        <li>✔ Cash on delivery available</li>
                    </ul>
                </div>

            </div>



            <div className='more_details_about_section'>

                <h1>This is details and more about Productimage section</h1>
            </div>
        </div>



    )
}

export default ProductDetailsPage
