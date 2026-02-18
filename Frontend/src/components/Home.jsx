// import React, { useState } from 'react'
// import { useLocation } from 'react-router-dom' //useLocation() is a React Router hook .It gives  information about the current URL.
// //  useLocation() returns an object like:


// // { pathname: "/products",
// //   search: "",
// //   hash: "",
// //   state: null,
// //   key: "abc123" } 
// const location=useLocation(); // const isHome=location.pathname==="/" // if home(path '/) it will true else it become false


import "../components/Home.css"
import video1 from "../assets/homePage/video1.mp4"
import video2 from "../assets/homePage/video2.mp4"
import video3 from "../assets/homePage/video3.mp4"
import video4 from "../assets/homePage/video4.mp4"
import video5 from "../assets/homePage/video5.mp4"
import ishmiLongVideo from "../assets/homePage/ishmilongvideo.mp4"
import ProductData from "./product.js"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Link, useNavigate } from "react-router"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import HomeBanner from "./HomeBanner.jsx"




function Home() {

    const bestSellerList = ProductData.filter((item) => item.category === 'bestseller')
    const SkinHairHealthList = ProductData.filter((item) => item.category === 'SkinHairHealth')



    // json.parse and json.stringify is used because local storrage does not work on directly array object (they work on strings)
    // 1️⃣ JSON.stringify()
    // Meaning:
    // 👉Convert JavaScript object/array → JSON string
    // Syntax:
    // JSON.stringify(value)

    //     2️⃣ JSON.parse()
    //     Meaning:

    // 👉 Convert JSON string → JavaScript object / array

    //     Syntax:

    //     JSON.parse(jsonString)

    // const [cart, setCart] = useState([]) cart item is a empty array but you have to intialize as localstorage cartItems(if avilabe or empty )

    const [cart, setCart] = useState(() => (JSON.parse(localStorage.getItem('cartItems')) || []))



    //useState(() => ( JSON.parse(localStorage.getItem('cartItems')) ||[]    when you use   useState(() => ( json.parse... then you should not use ' return ' explicitly
    //   useState(() => { JSON.parse(localStorage.getItem('cartItems')} ||[]   when you use  useState(()=>{ ....   then  you should use 'return because '{' need explicit return)
    // if (getcartItems) {
    //     return JSON.parse(getcartItems)
    // } else {
    //     return [];
    // }

    useEffect(() => {
        // localStorage.setItem('cartItems', JSON.stringify(cart))
        // console.log("get cart is :", cart);

        const syncCartitemFromlocalstorage = () => {
            const data = localStorage.getItem('cartItems');
            setCart(data ? JSON.parse(data) : [])
        }

        window.addEventListener("storage", syncCartitemFromlocalstorage)
        window.addEventListener('focus', syncCartitemFromlocalstorage)

        return () => {
            window.removeEventListener('storage', syncCartitemFromlocalstorage);
            window.removeEventListener('focus', syncCartitemFromlocalstorage)
        }


    }, [])

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cart))
    }, [cart])




    const handleaddtocardProduct = (id, img, title, quantity, discountPrice, originalPrice) => {

        const cartItem = { id, img, title, quantity, discountPrice, originalPrice }


        const alreadyAddedItem = cart.some(product => product.id === id)
        console.log("addeditem id is", alreadyAddedItem)
        if (alreadyAddedItem) {
            toast.error("Product already added in Cart")

        } else {
            let updatedCartitem = [...cart, cartItem]
            setCart(updatedCartitem)
            toast.success("Product added successfully in cart")
        }
    }





    return (
        <div className="Home_Section">


            <HomeBanner />
            <div className='midSection'>
                <div className='MiddleTexts'>
                    <h1>Welcome To <span>ISHMI - Beauty That Heals</span></h1>
                    <p>Rooted in Ancient Ayurveda and crafted by experts,
                        ISHMI offers skincare and wellness products that nourish, heal, and restore.
                    </p>
                    <p>Healing You, Naturally, Every Day, Because You Deserve True Ayurveda.</p>
                    <p>Be radiant. <span>Be nourished.Be ISHMI! </span></p>
                </div>

                <Swiper className="swiper" modules={[Navigation, Pagination, Autoplay]} autoplay={{ delay: 6000, disableOnInteraction: false }} pagination={true} breakpoints={{310:{slidesPerView:2}, 480: { slidesPerView: 2 },  768: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } }} spaceBetween={10}>
                    <SwiperSlide className="swiper-slide-video"  >   <video className='midsection_video' src={video1} autoPlay muted playsInline></video></SwiperSlide>
                    <SwiperSlide className="swiper-slide-video">  <video className='midsection_video' src={video2} autoPlay muted playsInline></video></SwiperSlide>
                    <SwiperSlide className="swiper-slide-video"><video className='midsection_video' src={video3} autoPlay muted playsInline></video></SwiperSlide>
                    <SwiperSlide className="swiper-slide-video">  <video className='midsection_video' src={video4} autoPlay muted playsInline></video></SwiperSlide>
                    <SwiperSlide className="swiper-slide-video">   <video className='midsection_video' src={video5} autoPlay muted playsInline></video></SwiperSlide>
                </Swiper>


            </div>

            <div className='Best_Sellers'>

                <h1>Best Sellers</h1>
                <p>Our Most-Loved Essentials—Tried, Tested, and Trusted!
                    that our customers can't live without.</p>

                <Swiper className="swiper" modules={[Navigation]} navigation={true} breakpoints={{ 310:{slidesPerView:2}, 480: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1280: { slidesPerView: 4 } }} spaceBetween={10}>
                    {bestSellerList.map((list, index) => (
                        <SwiperSlide key={index}  >
                            <div className="cards" >
                                <div className="card">

                                    <Link to={`/product/${list.slug}`}   >
                                        <div className="product_img">
                                            <img src={list.img} alt="product" />
                                        </div>
                                    </Link>
                                    <h3 className="product_title">{list.title}</h3>
                                    <div className="quantityandprice">
                                        <button className="quantity_btn">{list.quantity}</button>

                                        <div className="pricesection">
                                            <span className="discount_price">{list.discountPrice}</span>
                                            <span className="original_price">{list.originalPrice}</span>
                                        </div>
                                        <button className="add_to_cart" onClick={() => handleaddtocardProduct(list.id, list.img, list.title, list.quantity, list.discountPrice, list.originalPrice)}>Add to Cart</button></div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


            <button className='shopAllbtn'>Shop All</button>
            <div className='shopAll'>
                <div className='shopAll_video'>
                    <video className='ishmiLongVideo' src={ishmiLongVideo} autoPlay muted playsInline></video>
                </div>
            </div>

            <div className='SkinHairHealth'>
                <h2>Explore fresh formulations designed to nourish your skin, hair, and health.</h2>
                <p>Embrace Holistic Wellness Nurture Your Skin, Hair & Health with Ishmi Beauty Food</p>
                <div className='Best_Sellers'>
                    <Swiper className="swiper" modules={[Navigation]} navigation={true} breakpoints={{ 310:{slidesPerView:2}, 480: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1280: { slidesPerView: 4 } }} spaceBetween={10}>
                        {SkinHairHealthList.map((list, index) => (
                            <SwiperSlide key={index}  >
                                <div className="cards" >
                                    <div className="card">

                                        <Link to={`/product/${list.slug}`}   >
                                            <div className="product_img">
                                                <img src={list.img} alt="product" />
                                            </div>
                                        </Link>
                                        <h3 className="product_title">{list.title}</h3>
                                        <div className="quantityandprice">
                                            <button className="quantity_btn">{list.quantity}</button>

                                            <div className="pricesection">
                                                <span className="discount_price">{list.discountPrice}</span>
                                                <span className="original_price">{list.originalPrice}</span>
                                            </div>
                                            <button className="add_to_cart" onClick={() => handleaddtocardProduct(list.id, list.img, list.title, list.quantity, list.discountPrice, list.originalPrice)}>Add to Cart</button></div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <button className='shopAllbtn'>Shop All</button>

            <div className='HonoringAyurvedaLegacyContainer'>
                <div className='HonoringAyurvedaLegacy'>
                    <div className='HonoringAyurvedaLegacyIMGContainer'>
                        <img className="HonoringAyurvedaLegacyIMG" src={"https://ishmiherbal.com/assets/B12-CzLlu8TU.jpg"} alt="Image1" />
                        <img className="HonoringAyurvedaLegacyIMG" src={'https://ishmiherbal.com/assets/B13-Bggg-uVp.jpg'} alt="Image2" />
                    </div>
                    <div className='HonoringAyurvedaLegacyTexts'>
                        <p>Honoring Ayurveda’s Legacy</p>
                        <h1>Pure Ayurvedic Care for Skin, Health & Indulgence</h1>
                        <p>At ISHMI, we craft pure, plant-based skincare rooted in ancient wisdom. Our gentle,
                            chemical-free formulas are designed for all ages, blending tradition with modern care for healthy, radiant skin.</p>
                        <button className="HonoringAyurvedaLegacybtn">Shop Now</button>
                    </div>
                </div>
            </div>

            <div className='FeaturedCombos'>
                <h1>Featured Combos</h1>
                <p>Our Most-Loved Bundles—Tried, Tested, and Trusted!
                    Curated combinations our customers love..</p>
                <Swiper className="swiper" modules={[Navigation]} navigation={true} breakpoints={{ 310:{slidesPerView:2},  480: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1280: { slidesPerView: 4 } }} spaceBetween={10}>
                    {SkinHairHealthList.map((list, index) => (
                        <SwiperSlide key={index}  >
                            <div className="cards" >
                                <div className="card">

                                    <Link to={`/product/${list.slug}`}   >
                                        <div className="product_img">
                                            <img src={list.img} alt="product" />
                                        </div>
                                    </Link>
                                    <h3 className="product_title">{list.title}</h3>
                                    <div className="quantityandprice">
                                        <button className="quantity_btn">{list.quantity}</button>

                                        <div className="pricesection">
                                            <span className="discount_price">{list.discountPrice}</span>
                                            <span className="original_price">{list.originalPrice}</span>
                                        </div>
                                        <button className="add_to_cart" onClick={() => handleaddtocardProduct(list.id, list.img, list.title, list.quantity, list.discountPrice, list.originalPrice)}>Add to Cart</button></div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>



            </div>
            <button className='shopAllbtn'>VIEW ALL COMBOS</button>


            <div className='productAboutcontainer'>

                <h2>Ishmi Invites You to Explore Ayurveda’s Secrets </h2>
                <p className="productAboutparagraph">Nourish your skin, body, and soul with time-tested wisdom and holistic care.</p>
                <div className='productAboutSection'>

                    <div className='productAbout' >
                        <div className="productAboutimgContainer" >
                            <img src={"https://ishmiherbal.com/uploads/1747138187876-796364869.jpg"} alt="productAboutImage1" className='productAboutimg ' />
                        </div>
                        <div>
                            <p>4 sep 2024</p>
                            <h3>Why Herbal Skincare is the Future of Beauty</h3>
                            <p>"In a world where skincare aisles are crowded with chemical-laden products, more people are turnin"</p>
                        </div>
                    </div>

                    <div className='productAbout' >
                        <div className="productAboutimgContainer">
                            <img src={"https://ishmiherbal.com/uploads/1747138187876-796364869.jpg"} alt="productAboutImage1" className='productAboutimg ' />
                        </div>
                        <div>
                            <p>4 sep 2024</p>
                            <h3>Why Herbal Skincare is the Future of Beauty</h3>
                            <p>"In a world where skincare aisles are crowded with chemical-laden products, more people are turnin"</p>
                        </div>
                    </div>
                    <div className='productAbout' >
                        <div className="productAboutimgContainer">
                            <img src={"https://ishmiherbal.com/uploads/1747138187876-796364869.jpg"} alt="productAboutImage1" className='productAboutimg ' />
                        </div>
                        <div>
                            <p>4 sep 2024</p>
                            <h3>Why Herbal Skincare is the Future of Beauty</h3>
                            <p>"In a world where skincare aisles are crowded with chemical-laden products, more people are turnin"</p>
                        </div>
                    </div>

                    <div className='productAbout' >
                        <div className="productAboutimgContainer">
                            <img src={"https://ishmiherbal.com/uploads/1747138187876-796364869.jpg"} alt="productAboutImage1" className='productAboutimg ' />
                        </div>
                        <div>
                            <p>4 sep 2024</p>
                            <h3>Why Herbal Skincare is the Future of Beauty</h3>
                            <p>"In a world where skincare aisles are crowded with chemical-laden products, more people are turnin"</p>
                        </div>
                    </div>

                </div>



            </div>

            <div className='image_slider_container'>

                <div className='image_slider_child'>
                    <p>Embrace The Timeless</p>
                    <h3>Glow Of Nature With Ishmi Beauty Food</h3>
                    <div className='image_slider'>
                        <Swiper modules={[Navigation]} navigation={true} breakpoints={{ 640: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }}>
                            <SwiperSlide>   <img src={"https://ishmiherbal.com/assets/bottom1-BRBBhV3A.webp"} alt="" /> </SwiperSlide>
                            <SwiperSlide>   <img src={"https://ishmiherbal.com/assets/bottom2-DtnUDJ0z.webp"} alt="" /></SwiperSlide>
                            <SwiperSlide> <img src={"https://ishmiherbal.com/assets/bottom3-MEh0T_S3.webp"} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={"https://ishmiherbal.com/assets/bottom4-CpQn_5MO.webp"} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={"https://ishmiherbal.com/assets/bottom4-CpQn_5MO.webp"} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={"https://ishmiherbal.com/assets/bottom4-CpQn_5MO.webp"} alt="" /></SwiperSlide>
                        </Swiper>

                    </div>
                </div>


            </div>

            <div className='JointheISHMIClub_container'>
                <div className='JointheISHMIClub'>

                    <h2>Join the ISHMI Club! </h2>
                    <div className='JointheISHMIClub_emailandbutton'>
                        <input type="text" name="" id="" placeholder='Enter Your email' />
                        <button className='JointheISHMIClub_button'>Subscribe</button>

                    </div>

                </div>
            </div>






        </div >
    )
}

export default Home
