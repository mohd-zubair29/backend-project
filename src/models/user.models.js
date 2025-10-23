import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema =new mongoose.Schema(
    {
    userName:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        index:true,
    } ,
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    fullName:{
        type:String,
        required:true,
    },
    avatar:{
        type:String ,   //Link From Cloudinary
        required:true
    },
    coverImage:{
        type:String,

    },
    watchHistory:[
        {
            type:mongoose.Schema.Types.ObjectId,   //We want to store the videowatchen history of user in array to track it
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true, "PassWord Is Compulsory"]
    },
    refreshToken:{
        type:String
    }
    }, 
    {timestamps:true});

    
userSchema.pre(save, async function (next){
    if(!this.isModified("password")) return next()
    this.password=bcrypt.hash(this.password, 6)  
next()
})

//Now Next method is to compare the password and encrypted password

userSchema.methods.isPasswordCorrect= async function (password){
    return await bcrypt.compare(password , this.password)   //this will compare the both passwords and it will saved in database in encrypted form 
}
userSchema.methods.accessToken= async function (){
      return jwt.sign({
        _id: this._id,
        userName:this.userName,
        email:this.email,
        fullName:this.fullName
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
      }
    )
}
userSchema.Schema.refreshToken= async function (){
  return jwt.sign({
        _id: this._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn:process.env.REFESH_TOKEN_EXPIRY
      }
    )
}


    export const User=mongoose.model("User", userSchema);