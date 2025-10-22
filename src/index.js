import mongoose from "mongoose"
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import app from "./app.js"


dotenv.config(
    {path:'./env'})


connectDB().then(()=>{
  app.listen(`${process.env.PORT}`, ()=>{
    console.log(`App Is Listening At Port : ${process.env.PORT}`);
  })
})
.catch((error)=>{
    console.log("MONOGODB FAILED FOR CONNECTION", error)
})






/* 1) Method
//Iffe Method Code

import mongoose from "mongoose"
import express from "express"
const app= express()



( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URL}`)

        app.on("error", ()=>{
            console.log("Unable to connect to the database")
        })

        app.listen(`${process.env.PORT}`, ()=>{
            console.log(`App Is Listening At Port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("ERROR FOUND", error)
    }
})()
*/