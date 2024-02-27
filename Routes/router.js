// to resolve the client request
// 1) import express

const express = require('express')

// import controller

const userController = require('../controllers/userController')
const workourController = require('../controllers/workoutController')

// import jwt Middleware

const jwtMiddleware =require('../Middleware/jwtMiddleware')
const multerMiddleware = require('../Middleware/multerMiddleware')



// 2) create an object for the class in express

const router = new express.Router()

// 3)logic path for resolving the request
// regestration  

router.post('/user/register', userController.register)

// login
 router.post('/user/login',userController.login)

 router.post('/plans/add',jwtMiddleware,multerMiddleware.single("image"),workourController.addWorkout)

 router.get('/plan/allplan',jwtMiddleware,workourController.getallplan)
 

 router.get('/plan/details/:id',jwtMiddleware,workourController.getdetails)

 router.delete('/plans/deleteplay/:id',jwtMiddleware,workourController.deletePlan)
 router.put('/user/update/:id',jwtMiddleware,multerMiddleware.single('profile'),userController.profileUpdate)
 router.get('/users/allusers',jwtMiddleware,userController.getallusers)


// 4) export router

module.exports = router