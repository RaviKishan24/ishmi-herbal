import React, { useState } from 'react'
import './Accordian.css'

function Accordian() {

    const [open, setOpen] = useState(null)

    const handleAccordian = (id) => {
      if(id == open){
        setOpen(null)
      }else{
        setOpen(id)
      }
    }


    return (
        <div className='Accordian-container'>

            <div className="section">
                <button className='accoridan-button' onClick={()=>handleAccordian(0)} >
                    <p>Mango</p>
                    <span>{open===0?"-":"+"}</span>
                </button>

                {open ===0 && <div className='content-container' > <p className='content' >
                    Mangoes (Mangifera indica) are tropical stone fruits originating from South Asia
                    (India/Myanmar), cultivated for over 5,000 years. Known as the "king of fruits," they are rich in vitamins A
                    , C, and D, and grow in warm climates. With over 100 varieties,
                    they are a major global crop and national fruit of India, Pakistan, and the Philippines.</p>
                </div>}


            </div>
            <div className="section">
                <button className='accoridan-button' onClick={()=>handleAccordian(1)}>
                    <p>Exercise</p>
                    <span>{open===1?"-":"+"}</span>
                </button>
                {
                    open===1 && <div className='content-container' ><p className='content'>Regular, moderate-to-vigorous exercise is vital for health,
                        providing benefits like weight management, increased strength, improved mental health,
                        and reduced risk of chronic diseases. Guidelines recommend at least 150 minutes of moderate
                        aerobic activity or 75 minutes of vigorous activity weekly,
                        plus muscle-strengthening exercises. Common activities include walking,
                        running, swimming, cycling, and strength training. </p>
                    </div>
                }
            </div>
            <div className="section">
                <button className='accoridan-button' onClick={()=>handleAccordian(2)}>
                    <p>Save Water</p>
                    <span>{open===2?"-":"+"}</span>
                </button>
                {
                    open===2 && <div className='content-container' ><p className='content'>  Saving water helps preserve a vital natural resource, reduces energy consumption,
                        and lowers utility bills. Key actions include taking shorter showers, turning off taps while brushing
                        teeth or washing dishes, fixing leaks immediately, and running washing machines/dishwashers only with full loads.
                        Simple daily changes can significantly impact water conservation. </p>
                    </div>
                }
            </div>

        </div>
    )
}

export default Accordian
