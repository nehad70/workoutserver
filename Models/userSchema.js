// import mongoose 

const mogoose= require('mongoose')

// import validator

const validator = require('validator')

// create schema - use schema claass in mongoose

const userSchema = new mogoose.Schema({
    username:{
        type:String,
        require:true,
        min:['3','must be atleast 3 character , got only {value}']
    },
    email:{
        type:String,
        require:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email')
            }
        }

    },
    password:{
        type:String,
        require:true,
       
    },
    instagram:{
        type:String
    },
    profile:{
        type:String
    }

})


// create model

const users = mogoose.model("users",userSchema)

// export the model

module.exports = users