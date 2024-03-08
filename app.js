const express=require('express')


const userRouter=require('./src/Router/user.Route')

const router=express.Router()

router.use('/user',userRouter)



module.exports=router