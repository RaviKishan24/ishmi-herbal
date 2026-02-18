import React from 'react'
import SignUp from './components/SignUp'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Footer from './components/Footer'
import ShopAll from './components/ShopAll'
import Cart from './components/Cart'
import ProductDetailsPage from './components/ProductDetailsPage'
import { Toaster } from "react-hot-toast"
// import Accordian from './components/Accordian'
// import RandomColor from './components/RandomColor'

// import EaxmpleShowProduts from './components/EaxmpleShowProduts'
// import UseStateandEffect from './components/UseStateandEffect'
function App() {
    return (

        <div>     
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/loginsignup' element={<SignUp />} />
                <Route path='/shop' element={<ShopAll />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/product/:slug' element={<ProductDetailsPage />} />
            </Routes>
            <Footer />

            {/* <Accordian/> */}
            {/* <UseStateandEffect/> */}
            {/* <EaxmpleShowProduts /> */}

            {/* <RandomColor /> */}




            <Toaster position='top-right' reverseOrder={false}></Toaster>
        </div>

    )
}

export default App

