//import mongoos

const mongoose = require('mongoose')

// connection string of mongodb

const connectionString = process.env.DATABASE

// connect to mongodb using mogoose

mongoose.connect(connectionString).then(()=>{
    console.log(`mongodb connected successfully`);

}).catch((err)=>{
    console.log(`mongodb connection failes due to :${err}`);

})