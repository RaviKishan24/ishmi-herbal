import React, { useState } from 'react'
import { Link } from "react-router-dom";
import facebook from "../assets/homePage/facebook.png"
import insta from "../assets/homePage/insta.png"
import youtube from "../assets/homePage/youtube.png"
import logo from "../assets/homePage/logo.png"

function Footer() {

    const [open, setOpen] = useState(null) //null behaves as here false
    // here false is not because true false is boolean and if any one id is open is true then all state become true so i need to use null 
    //i should store like this:
    // null  → nothing open   
    // 0     → Useful Links open
    // 1     → Help Center open
    // 2     → Knowledge open
    // console.log("open is ",open)// in start open is false

    const handleopen = (id) => {

        if (open == id) {
            setOpen(null)
            console.log("in second click")
        } else {
            setOpen(id)
            console.log("in first  clcik")
        }

    }
    
    return (
        <div>
            <div className='Foooter_container'>

                <div className='Foooter_container_links'>
                    <div>
                        <img src={logo} alt="footerLogo" className='footer_logo' />
                        <p className='Foooter_container_links_text'>
                            Rooted in Ayurveda,
                            we craft luxurious skincare, potent remedies, and healing chocolates—pure, natural,
                            and made with love for your skin and soul.
                        </p>

                        <div className='footer_socialmedialinks'>
                            <img src={facebook} alt="facebook" />
                            <img src={insta} alt="instagram" />
                            <img src={youtube} alt="youtube" />
                        </div>
                    </div>

                    <div>
                        <h2>Useful Links</h2>
                        <ul>
                            <li><Link to="/account">My Account</Link></li>
                            <li><Link to="/products">Our Products</Link></li>
                            <li><Link to="/cart">My Cart</Link></li>
                            <li><Link to="/wishlist">My Wishlist</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2>Help Center</h2>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                            <li><Link to="/faqs">FAQs</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2>Knowledge</h2>
                        <ul>
                            <li><Link to="/terms">Terms & Conditions</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/return-policy">Return & Refund Policy</Link></li>
                            <li><Link to="/shipping-policy">Shipping Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <hr />

                <p className='Foooter_container-copyright'>© 2026 ISHMI. All rights reserved.</p>

            </div>
            {/* footer for mobile and tablet */}
            <div className='Foooter_container-Mobile'>

                <div className='Foooter_links-mobile'>
                    <div>
                        <img src={logo} alt="footerLogo" className='footer_logo' />
                        <p className='Foooter_container_links_text-mobile'>
                            Rooted in Ayurveda,
                            we craft luxurious skincare, potent remedies, and healing chocolates—pure, natural,
                            and made with love for your skin and soul.
                        </p>

                        <div className='footer_socialmedialinks'>
                            <img src={facebook} alt="facebook" />
                            <img src={insta} alt="instagram" />
                            <img src={youtube} alt="youtube" />
                        </div>
                    </div>

                    <div className='link-container'>
                        <button className='links' onClick={() => handleopen(0)}  >
                            <h2>useful Links</h2>
                            <span>{open === 0 ? "-" : "+"}</span>
                        </button>

                        {
                            open === 0 && (<div>
                                <ul>
                                    <li><Link to="/account">My Account</Link></li>
                                    <li><Link to="/products">Our Products</Link></li>
                                    <li><Link to="/cart">My Cart</Link></li>
                                    <li><Link to="/wishlist">My Wishlist</Link></li>
                                </ul>
                            </div>)
                        }


                    </div>
                    <div className='link-container'>
                        <button className='links' onClick={() => handleopen(1)} >
                            <h2>Help center</h2>
                            <span>{open === 1 ? "-" : "+"}</span>
                        </button>
                        {  
                            open === 1 && (
                                <div>
                                    <ul>
                                        <li><Link to="/terms">Terms & Conditions</Link></li>
                                        <li><Link to="/privacy">Privacy Policy</Link></li>
                                        <li><Link to="/return-policy">Return & Refund Policy</Link></li>
                                        <li><Link to="/shipping-policy">Shipping Policy</Link></li>
                                    </ul>
                                </div>
                            )
                        }



                    </div>
                    <div className='link-container'>
                        <button className='links' onClick={() => handleopen(2)} >
                            <h2>Knowledge</h2>
                            <span>{open === 2 ? "-" : "+"}</span>
                        </button>
                        {
                            open === 2 && (
                                <div>
                                    <ul>
                                        <li><Link to="/terms">Terms & Conditions</Link></li>
                                        <li><Link to="/privacy">Privacy Policy</Link></li>
                                        <li><Link to="/return-policy">Return & Refund Policy</Link></li>
                                        <li><Link to="/shipping-policy">Shipping Policy</Link></li>
                                    </ul>
                                </div>
                            )
                        }
                        <div>
                        </div>
                    </div>




                </div>

                <hr />

                <p className='Foooter-mobile-copyright'>© 2026 ISHMI. All rights reserved.</p>

            </div>
        </div>




    )
}

export default Footer;
