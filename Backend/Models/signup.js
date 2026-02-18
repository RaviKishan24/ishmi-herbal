import mongoose from "mongoose";
const signUpSchema=new mongoose.Schema({
    email:{type:String,require:true},
    mobile:{type:String,require:true},
    password:{type:String,require:true},
    role:{type:String,require:false,default:"user"}
});
const signUpModel=new mongoose.model("Signup",signUpSchema);

export default signUpModel; 