import React, { useState } from 'react'
import "../components/Signup.css"
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify"

function SignUp() {
    const [atLogin, setAtLogin] = useState(false);
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, SetPassword] = useState("");
    const [confirmPasswod, setConfirmPassword] = useState("")

    const dispatch = useDispatch();
    if (password != confirmPasswod) {
        toast.error("Password does not matched ")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email);
        formData.append("contact", contact);
        formData.append("password", password);

 
    }


    return (
        
        <div className='signup_ContainerS'>
            <div className='signup_image'>
                <img
                    src={atLogin ? " https://ishmiherbal.com/assets/Login1-BW_KI86N.webp" : "https://ishmiherbal.com/assets/SignUp1-DNVGk7zG.webp "}
                    alt="Wellness"
                />
            </div>
            {/* condition ? value_if_true : value_if_false */}

            <div className='signup_form'>
                <img
                    className='head_Img'
                    src="https://ishmiherbal.com/assets/S-BVIRN_Fx.png"
                    alt="Logo"
                />

                <h1>Your Wellness Journey Continues Here</h1>
                <p>{atLogin ? ("Login to explore holistic skincare & mindful indulgence.") : ("Signup to explore holistic skincare & mindful indulgence.")}</p>

                <button className='signinwithgoogle'>
                    Sign in with Google
                </button>


                <form className='signUp_inputs' onSubmit={handleSubmit}>

                    <input type="email" placeholder='Email Address' required />
                    {atLogin ? " " : <input type="text" placeholder='Phone Number' required />}
                    <input type="password" placeholder='Password' />
                    {atLogin ? "" : <input type="password" placeholder='Confirm Password' />}
                    {atLogin ? <>
                        <div className='signUp_checkboxfogetpassword'>
                            <div className='checboxx'>
                                <input type="checkbox" />
                                <p>Remember Me</p>
                            </div>
                            <p className='forget_password'>Forgot Password?</p>
                        </div>
                    </> : ""}

                    <button type='submit' className='btn_signup'>{
                        atLogin ? ("Login") : "SignUp"}

                    </button>
                </form>
                <div className='login_text'>{atLogin ?
                    <>
                        <p>Not a member?</p>
                        <p className='login_link' onClick={() => setAtLogin(false)}> Register</p>

                    </> :
                    <>
                        <p>Already a member?</p>
                        <p className='login_link' onClick={() => setAtLogin(true)}>Login</p>
                    </>
                }
                </div>
            </div>

        </div>
    )
}

export default SignUp;
