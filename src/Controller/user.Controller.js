const userModel = require("../Model/user.Model")

const Constraints=require('../../Constraints')



const Register=async(req,res)=>{
    try {
        
        const {Email,password}=req.body
        console.log(Constraints.emailPattern.test(Email));

        if(!Constraints.emailPattern.test(Email)||!Constraints.passwordPattern.test(password)){
            return res.status(400).send("Please Enter Valid Credentials");
        }
        const userObj=new userModel({
            Email:Email,
            password:password
        })
        
        await userObj.save().then((result)=>{
            return res.status(200).send("Registered Successfully")
        })
    } catch (error) {
        console.log(error);
        res.status(404).send('Something Went Wrong')
    }
}

const logIn=async(req,res)=>{
    try {
        console.log("I m in login")
       const {Email,password}=req.body
        if(!Constraints.emailPattern.test(Email)||!Constraints.passwordPattern.test(password)){
              return res.send('Your Credentials are not Valid')
        }else{
             const result=await userModel.findOne({Email:Email,password:password})
             if(result){
          return  res.send("Login Successfully")
             }
          else{
            res.send("NOT FOUND")
          }
             }
          
        }catch(err){
            res.status(404).send("Something Went Wrong")
        }
}
           
        
const forgetPassword=async(req,res)=>{
    try {
        const Email=req.body.Email
      
        if(!Constraints.emailPattern.test(Email)){
            return res.status(400).send("Please Enter Valid Email");
        }
        const emailFound=await userModel.findOne({Email:Email})
        if(emailFound){
        return  res.send("Password reset Instructions are Emailed")
        }
        return res.send("Email Not Found")

    } catch (error) {
        res.status(404).send("Something Went Wrong")
    }
}

const check=async(req,res)=>{
    res.send("i m working")
    }
module.exports={
    Register,logIn,forgetPassword,check
}