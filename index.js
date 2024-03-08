const dotenv=require('dotenv')
dotenv.config()

const express=require('express')

const mongoose=require('mongoose')
const indexRouter=require('./app')
const app=express()

const port=8080
mongoose.connect(process.env.DB)
app.use(express.json())

app.use('/api',indexRouter)


app.use((req, res, next) => {
  res.status(404).send();
});


app.listen(process.env.PORT||port,()=>{
    console.log(`Listening on ${process.env.PORT}`)
})


module.exports=app