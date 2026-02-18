import React from 'react'

function Otp() {
    return (
        <div className='otpParent'>
            <div className='otpMain'>
                <h1>Otp Verification</h1>
                <form action="">
                    <div className='inputs'>  <label htmlFor="otp">OTP:</label>
                        <input type="text" id='otp' /></div>
                </form>
            </div>
        </div>
    )
}

export default Otp
