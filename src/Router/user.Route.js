const express  =require("express")
const uroute=express.Router()

const  userController  =require('../Controller/user.Controller')


uroute.post('/signup',userController.Register)
uroute.post('/login',userController.logIn)
uroute.post('/forgot',userController.forgetPassword)

module.exports =uroute