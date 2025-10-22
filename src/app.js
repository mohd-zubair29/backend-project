import express from "express"
const app =express()
import cors from "cors"
import cookieParser from "cookie-parser"



export {app}

app.use(
    cors({origin:process.env.CORS_ORIGIN})
)
//app.use(Middlewares ku use karte)
app.use(express.json({limit:"20kb"}))  //Data Json format mai aata
app.use(express.urlencoded({extended:true}))   //Data url k form mai aata aiseliye aisa use kare
app.use(express.static("public"))      //Kabhi files, documents,pdfs aate usku handle karne
app.use(cookieParser())