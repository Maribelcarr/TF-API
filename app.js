import express from "express";
import cors from "cors";
//import dotenv from "dotenv";
import router from "./Routes/routes.js";
import dbConnection from "./Config/db.js";
import bodyParser from 'body-parser';

//import dotenv from 'dotenv';
//dotenv.config();


const app= express();
app.use(bodyParser.json());
//const puerto=4000;
const puerto=process.env.PORT || 4000;


app.use(express.json ());
app.use (cors());
app.use (express.urlencoded({extended:true}));
app.use ("", router);


app.listen (puerto, ()=>{
    console.log(`server corriendo por el puerto ${puerto}`)
});





