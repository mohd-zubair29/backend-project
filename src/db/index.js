import mongoose from "mongoose"
import { DB_NAME } from "../constant.js" 



const connectDB = async ()=>{
        try{
    const connectionInstance= await mongoose.connect("mongodb+srv://zubairpc2901_db_user:U6Iqz2SYXAlOTk4L@cluster0.lnhuv1i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
//const connectionInstance= await mongoose.connect(`${process.env.MONGO_URL}`)  //.env is not working so we are using direct link here only as above
    console.log(`MongoDb onnected on ${connectionInstance.connection.host}`)
        }catch(error){
        console.log("ERROR", error)
        }
}


export default connectDB