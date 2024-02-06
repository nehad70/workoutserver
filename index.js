
// 1) import dotenv
// loads env files

require('dotenv').config()

// 2)- import express
// to create server

const express =require('express')

// 3) imprt cors
// is used to communicate

const cors =require('cors')

// import router

const router = require('./Routes/router')

// import connections.js / mongoose

require('./DB/connections')

//import application specific missleware

/*const appMiddleware = require('./Middleware/appMiddleware')*/


// 4) create server
//Creates an Express application. The express() function is a top-level function exported by the express module.

const WaServer = express()

// 5) use of cors by server

WaServer.use(cors())

// 6) parses json and covert it into javascript format

WaServer.use(express.json())

//server use router

WaServer.use(router)

//srever use midllware
/*WaServer.use(appMiddleware)*/


WaServer.use('/uploads',express.static('./uploads'))


//7) custome the port

const PORT = 4000 || process.env.PORT

// 8) run server

WaServer.listen(PORT,()=>{

    console.log(`SERVER RUNNNING SUCCESSFULLY AT PORT NUMBER ${PORT}`);

})

// 9) get http rqst to base URL = http://localhost:4000/

WaServer.get('/',(req,res)=>{

    res.send('<h1 style="color:red ">workout app server running successfully and waiting for  client request</h1>')

})

// post request

WaServer.post('/',(req,res)=>{
 
    res.send('post request')
})

// put request

WaServer.put('/',(req,res)=>{
 
    res.send('put request')
})








































