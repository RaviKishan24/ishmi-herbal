import express from "express";
import { signUp } from "../controller/signUp.js";
const signUpRouter= express.Router();

signUpRouter.post("/Register",signUp);

export default signUpRouter;


