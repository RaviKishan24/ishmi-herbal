import signUpModel from "../Models/signup.js"
import bcrypt from "bcrypt"
import 'dotenv/config'



export const signUp = async (req, res) => {

    try {
        const { email, mobile, password } = req.body;

        if (!email || !mobile || !password) {
            res.status(401).json({
                success: false,
                message: "Input filed is missing"
            })
        }

        const existingEmail = await signUpModel.findOne({ email })
        const existingMobile = await signUpModel.findOne({ mobile })

        if (existingEmail) {
            res.status(401).json({
                success: false,
                message: "Email aready registred with us"
            })
        }
        if (existingMobile) {
            res.status(401).json({
                success: false,
                message: "Mobile aready registred with us"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = {
            email,
            mobile,
            password: hashedPassword,

        }

        await user.save();
        res.status(200).json({
            success: true,
            message: "user create Successfully",
            data: user
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Server Error occured" || error.message
        })

    }
}

































// export const signUp = async (req, res) => {


//     try {
//         const { email, contact, password } = req.body;

//         if (!email || !contact || !password) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Input field Missing"
//             })
//         }
//         const existingEmail = await signUpModel.findOne({ email });
//         const existingContactNo = await signUpModel.findOne({ contact });

//         if (existingEmail) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Email already registerd with us"
//             })
//         }
//         if (existingContactNo) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Contact NO already registered with us"
//             })
//         }

//         const hashedPassword = await bcrypt.hash(password, 10) 

//         const newsignUp = await signUpModel.create({
//             email,
//             contact,
//             password: hashedPassword,

//         })

//         res.status(200).json({
//             success: true,
//             message: "Sign up successfully",
//             data: newsignUp
//         })



//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: error.message || "Server error occured"
//         })
//     }
// };



export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body)
        if (!email || !password)
            res.status(400).json({
                success: false,
                message: "Input field missing"
            })

        const user = await signUpModel.findOne({ email: email });
        if (!user) {
            res.status(400).json({
                success: false,
                message: "User is not Registered, Please Sign up"
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            res.status(400).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        if (user) {
            const payload = { userId: user._id, role: user.role };
            const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1hr' });
            console.log("jwt token created")

            res.cookie('authToken', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 3600000 // 1hr in milliseconds

            })
            return res.status(200).json({
                success: true,
                message: "Login Successfull",
                token: token
            })


        } else {
            return res.status(401).json({
                success: false,
                message: "Invaild credentials"
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Server error occured"
        })
    }
}

export const verifyToken = async (req, res) => {
    try {
        const token = req.cookies.authToken;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: " Access denied ! Token not provided"
            })
        }

        await jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
            if (err) {
                return res.status(401).json({
                    success: false,
                    message: "unauthorized access"
                })
            } else {
                return res.status(200).json({
                    success: true,
                    message: "Token Verified",
                    user: user

                })
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server errr"
        })
    }
}



