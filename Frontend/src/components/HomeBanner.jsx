import React from 'react'
import mobilebg1 from "../assets/homePage/mobilebg2.webp"
import desktopbg from "../assets/homePage/homeBg.webp"
import "./HomeBanner.css"

function HomeBanner() {
   return (
      <section className='hero'>

         <picture className='hero-images'>
            <source media='(max-width:768px)' srcSet={mobilebg1} />
            <img src={desktopbg} alt="hero banner"  />

         </picture>
      </section>
   )
}

export default HomeBanner
