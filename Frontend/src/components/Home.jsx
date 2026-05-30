// import React, { useState } from 'react'
// import { useLocation } from 'react-router-dom' //useLocation() is a React Router hook .It gives  information about the current URL.
// //  useLocation() returns an object like:


// // { pathname: "/products",
// //   search: "",
// //   hash: "",
// //   state: null,
// //   key: "abc123" } 
// const location=useLocation(); // const isHome=location.pathname==="/" // if home(path '/) it will true else it become false

import pureAryuvedic1 from "../assets/productImages/pure aruvedic1.jpg"
import pureAryuvedic2 from "../assets/productImages/pure aruvedic2.jpg"

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

import HomeBanner from "./HomeBanner.jsx";
import AuraBloomScalpRestore from "../assets/productImages/AuraBloom Scalp Restore.jpg";
import BotaniCareGrowthSerum from "../assets/productImages/BotaniCare Growth Serum.jpg";
import EarthGlowRoseTherapy from "../assets/productImages/EarthGlow Rose Therapy.jpg";
import GlowRootHerbalEssence from "../assets/productImages/GlowRoot Herbal Essence.jpg";
import GreenAuraCocoaRepair from "../assets/productImages/GreenAura Cocoa Repair.jpg";
import HerbaLuxVelvetLipShield from "../assets/productImages/HerbaLux Velvet Lip Shield.jpg";
import LumiHerbVitaminShield from "../assets/productImages/LumiHerb Vitamin Shield.jpg";
import NatureNestCoconutFusion from "../assets/productImages/NatureNest Coconut Fusion.jpg";
import PureLeafSkinRevivalGel from "../assets/productImages/PureLeaf Skin Revival Gel.jpg";
import RadianceHairElixir from "../assets/productImages/Radiance Hair Elixir.jpg";
import SilkPetalLipNectar from "../assets/productImages/SilkPetal Lip Nectar.jpg";
import VitalRootSkinDefender from "../assets/productImages/VitalRoot Skin Defender.jpg";

const sliderImages = [
    AuraBloomScalpRestore,
    BotaniCareGrowthSerum,
    EarthGlowRoseTherapy,
    GlowRootHerbalEssence,
    GreenAuraCocoaRepair,
    HerbaLuxVelvetLipShield,
    LumiHerbVitaminShield,
    NatureNestCoconutFusion,
    PureLeafSkinRevivalGel,
    RadianceHairElixir,
    SilkPetalLipNectar,
    VitalRootSkinDefender
];




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
                    <h1>Welcome To <span>Ayurveda Wellness Care</span></h1>

                    <p>
                        Rooted in the timeless wisdom of Ayurveda, Ayurveda Wellness Care
                        brings you premium herbal products crafted to nourish your skin,
                        strengthen your hair, and support holistic wellness.
                    </p>

                    <p>
                        Pure Herbs. Natural Wellness. Trusted Ayurvedic Care.
                    </p>

                    <p>
                        Be Healthy. <span>Be Natural. Be Ayurveda Wellness Care.</span>
                    </p>
                </div>

                <Swiper className="swiper" modules={[Navigation, Pagination, Autoplay]} autoplay={{ delay: 6000, disableOnInteraction: false }} pagination={true} breakpoints={{ 310: { slidesPerView: 2 }, 480: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } }} spaceBetween={10}>
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

                <Swiper className="swiper" modules={[Navigation]} navigation={true} breakpoints={{ 310: { slidesPerView: 2 }, 480: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1280: { slidesPerView: 4 } }} spaceBetween={10}>
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
                <p>
                    Embrace holistic wellness with herbal formulations designed
                    to nourish your skin, strengthen your hair, and support overall health.
                </p>
                <div className='Best_Sellers'>
                    <Swiper className="swiper" modules={[Navigation]} navigation={true} breakpoints={{ 310: { slidesPerView: 2 }, 480: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1280: { slidesPerView: 4 } }} spaceBetween={10}>
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
                        <img className="HonoringAyurvedaLegacyIMG" src={pureAryuvedic1} alt="Image1" />
                        <img className="HonoringAyurvedaLegacyIMG" src={pureAryuvedic2} alt="Image2" />
                    </div>
                    <div className='HonoringAyurvedaLegacyTexts'>
                        <p>Honoring Ayurveda's Timeless Legacy</p>

                        <h1>Pure Herbal Wellness for Skin, Hair & Health</h1>

                        <p>
                            At Ayurveda Wellness Care, we create premium herbal products inspired
                            by centuries of Ayurvedic wisdom. Our carefully crafted formulations
                            combine nature's finest ingredients to promote healthy skin, strong hair,
                            and overall well-being—naturally and safely.
                        </p>
                        <button className="HonoringAyurvedaLegacybtn">Shop Now</button>
                    </div>
                </div>
            </div>

            <div className='FeaturedCombos'>
                <h1>Featured Combos</h1>
                <p>Our Most-Loved Bundles—Tried, Tested, and Trusted!
                    Curated combinations our customers love..</p>
                <Swiper className="swiper" modules={[Navigation]} navigation={true} breakpoints={{ 310: { slidesPerView: 2 }, 480: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1280: { slidesPerView: 4 } }} spaceBetween={10}>
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

                <h2>Ayurveda Wellness Care Invites You to Discover Nature's Healing Power</h2>

                <p className="productAboutparagraph">
                    Experience the benefits of authentic Ayurvedic ingredients for healthier skin,
                    stronger hair, and a balanced lifestyle.
                </p>
                <div className='productAboutSection'>

                    <div className='productAbout'>
                        <div className="productAboutimgContainer">
                            <img
                                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600"
                                alt="Herbal Ingredients"
                                className='productAboutimg'
                            />
                        </div>
                        <div>
                            <p>10 Jan 2026</p>
                            <h3>Why Herbal Skincare is the Future of Beauty</h3>
                            <p>Discover how plant-based ingredients are transforming skincare with safe and effective solutions.</p>
                        </div>
                    </div>

                    <div className='productAbout'>
                        <div className="productAboutimgContainer">
                            <img
                                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600"
                                alt="Natural Wellness"
                                className='productAboutimg'
                            />
                        </div>
                        <div>
                            <p>15 Jan 2026</p>
                            <h3>Benefits of Ayurveda for Everyday Wellness</h3>
                            <p>Learn how Ayurvedic practices can help maintain balance, energy, and long-term health.</p>
                        </div>
                    </div>

                    <div className='productAbout'>
                        <div className="productAboutimgContainer">
                            <img
                                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600"
                                alt="Ayurvedic Care"
                                className='productAboutimg'
                            />
                        </div>
                        <div>
                            <p>20 Jan 2026</p>
                            <h3>Natural Hair Care with Herbal Ingredients</h3>
                            <p>Explore powerful herbs that nourish the scalp and promote healthier, stronger hair naturally.</p>
                        </div>
                    </div>

                    <div className='productAbout'>
                        <div className="productAboutimgContainer">
                            <img
                                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800"
                                alt="Organic Beauty"
                                className='productAboutimg'
                            />
                        </div>
                        <div>
                            <p>25 Jan 2026</p>
                            <h3>The Power of Plant-Based Beauty</h3>
                            <p>From Aloe Vera to Turmeric, discover nature's most trusted ingredients for radiant skin.</p>
                        </div>
                    </div>

                </div>


            </div>

            <div className='image_slider_container'>
                <div className='image_slider_child'>
                    <p>Embrace The Timeless</p>
                    <h3>Glow Naturally With Ayurveda Wellness Care</h3>

                    <div className='image_slider'>
                        <Swiper
                            modules={[Navigation]}
                            navigation={true}
                            spaceBetween={15}
                            breakpoints={{
                                320: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 }
                            }}
                        >
                            {sliderImages.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={image}
                                        alt={`Ayurveda Wellness Care Product ${index + 1}`}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className='JointheISHMIClub_container'>
                <div className='JointheISHMIClub'>

                    <h2>Join the Ayurveda Wellness Care Family!</h2>
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
