const express = require('express')
const  userController = require('../controllers/user.controller')
const userRouter = express.Router()


// register route
userRouter.post('/',userController.register)
userRouter.get('/',userController.getUserData)




module.exports = {userRouter}

