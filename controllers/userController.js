//import model

const users =require('../Models/userSchema')

//import jwt

const jwt = require('jsonwebtoken')

// logic for register

 exports.register = async(req,res)=>{
   //logic
    console.log('inside userCntroller-register logic');
   
    const {username,email,password} = req.body

     try{ const existingUser= await users.findOne({email})
           if(existingUser){
            //if true return doc it means user already exist
            // so we sending response inthe 406 series 
             res.status(406).json('Account already Exist.....plaese login')
          }
          else
          {
            // find one returns null  it means user did not exist
            // we register the user
              const newUser = new users({
                  username,
                  email,
                  password,
                  instagram:"",
                  profile:""
               }) 

                // to add above object use save() method in mongoos
                await newUser.save()
               
            //response
             res.status(200).json(newUser)
             
             
             
           }

         
        }
      // javascript resolve runtime errors using try-catch block
      catch(err)
       {
          res.status(401).json(`Register request failed due to ${err} ` )
        }
}



// Login

exports.login  = async (req,res)=>{
  console.log('inside login function');
 

  const{email,password}= req.body
 

  
  try{const existingUser = await users.findOne({email,password})
  if(existingUser){

    //sign into 
    const token = jwt.sign({userId:existingUser._id},"supersecretkey12345")
    res.status(200).json({

      existingUser,
      token
    })

  }else{
      res.status(404).json('Invalid email id or password')
  }
}catch(err){
          res.status(401).json(`login request failed due to ${err} ` )
}
}  
    