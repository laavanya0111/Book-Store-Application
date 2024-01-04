import express from "express";
import bodyParser from "body-parser";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./Routes/booksRoute.js";
import cartRoute from "./Routes/cartRoute.js";
//import booksModel from "./models/booksModel.js";
import cors from "cors"
import session from 'express-session';

const app = express();

//middleware to parse the request body
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}))
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res)=> {
    return res.status(200).json({message: "Welcome to the MERN Stack Project"})
})

//Routes to get the details of the books
app.use('/books', booksRoute);
app.use('/cart', cartRoute);

mongoose.connect(mongoDBURL)
.then(() => {
    console.log("App connected to database");
    app.listen(PORT, ()=>{
        console.log(`App is listening to port: ${PORT}`);
    });
})
.catch((err) => {
    console.log(err);
})