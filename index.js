const dotenv=require('dotenv')
dotenv.config()

const express=require('express')

const mongoose=require('mongoose')
const indexRouter=require('./app')
const app=express()

const PORT=8080

const connectDB = async () => {
  try {
    const conn = await  mongoose.connect(process.env.DB)
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}






app.use(express.json())

app.use('/api',indexRouter)


app.use((req, res, next) => {
  res.status(404).send();
});



connectDB().then(() => {
    app.listen(process.env.PORT||PORT, () => {
        console.log("listening for requests");
    })
})


module.exports=app