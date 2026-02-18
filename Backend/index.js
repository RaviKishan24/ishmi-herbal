import 'dotenv/config'
import express from "express"
import cors from "cors"
import connectDB from "./ishmiDB.js"

import cookieParser from 'cookie-parser'
import signUpRouter from './routes/signUp.js'

const server = express();
const port = 7000
connectDB();
server.use(express.json());
server.use(cookieParser());


server.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

server.use("/api",signUpRouter)



server.listen(port, () => {
    console.log(`server is running on this http://localhost:${port}`)
})