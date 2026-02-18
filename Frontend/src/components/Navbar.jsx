import React, { useState } from 'react'
import logo from "../assets/homePage/logo.png"
import './Navbar.css'
import { Link, useLocation } from 'react-router'

function Navbar() {

    const [shopBy, setShopBy] = useState(false)
    const location = useLocation();
    const isHome = location.pathname === "/"
    const [sidenav, setSidenav] = useState(false)
    const [openshopbyforPhone, setOpenshopbyPhone] = useState(false)

    
    return (
        <div className="navbar-container">

            <nav className={` ${isHome ? "navbar-transparent" : ""}`}>
                <div>
                    <img src={logo} alt="Logo" className='logoImg' />
                </div>

                <div className='middle_nav'>
                    <Link to='/shop'>Shop All</Link>
                    <Link to="">Best Sellers</Link>
                    <div className='shopby' onClick={() => setShopBy(!shopBy)}  >  {shopBy && <div className='shopyby_list'>
                        <p>Hair Luxe</p>
                        <p>Face Luxe</p>
                        <p>Lip Luxe</p>
                        <p>Body Luxe</p>
                        <p>Daily wellness</p>
                        <p>Wellness Chocolates</p>
                    </div>}
                        <span>Shop By</span>
                        <img className='ShopbyIcon' src={"https://img.icons8.com/?size=100&id=85327&format=png&color=000000"} alt="" />
                    </div>
                    <Link to="">Gift & Combo</Link>
                    <Link to=""> Blogs</Link>
                    <Link to="">Contact  Us</Link>
                </div>

                <div className='sideicons'>
                    <Link to="/loginsignup"> <img src={"https://img.icons8.com/?size=100&id=23374&format=png&color=000000"} alt="Account" /></Link>
                    <Link to="/cart"> <img src={"https://img.icons8.com/?size=100&id=16501&format=png&color=000000"} alt="Cart" /></Link>
                    <Link> <img src={"https://img.icons8.com/?size=100&id=16076&format=png&color=000000"} alt="heart" /></Link>
                    <img onClick={() => setSidenav(true)} className='hamburger-menu' src={"https://cdn-icons-png.flaticon.com/128/7710/7710488.png"} alt="" />

                </div>

            </nav>

            <div className={` middle-nav-for-phone ${sidenav ? "middle-nav-for-phone-active" : ""}`}>

                <div className='close-icon-container'><img className='close-icon' onClick={() => setSidenav(false)} src="https://cdn-icons-png.flaticon.com/128/1828/1828778.png" alt="close icon" /></div>

                <div>
                    <div className='phonelinkexample'><Link to='/shop'>Shop All</Link></div>
                    <div className='phonelinkexample'><Link to="">Best Sellers</Link></div>
                    <div className='phonelinkexample'><Link to="">Gift & Combo</Link></div>
                    <div className='phonelinkexample'><Link to=""> Blogs</Link></div>
                    <div className='phonelinkexample' ><Link to="">Contact  Us</Link></div>
                    <div className='phonelinkexample' ><Link onClick={() => setOpenshopbyPhone(!openshopbyforPhone)}>Shop By</Link></div>
                    <div className='shopby-for-phone'>
                        {openshopbyforPhone && <div className='shopyby_list-for-phone'>
                            <Link to="/hair-luxe">Hair Luxe</Link>
                            <Link to="/face-luxe">Face Luxe</Link>
                            <Link to="/lip-luxe">Lip Luxe</Link>
                            <Link to="/body-luxe">Body Luxe</Link>
                            <Link to="/daily-wellness">Daily wellness</Link>
                            <Link to="/wellness-chocolates">Wellness Chocolates</Link>
                        </div>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
