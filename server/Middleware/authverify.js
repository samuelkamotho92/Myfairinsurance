const jwt = require("jsonwebtoken");
const memberModel = require('../Models/membermodel')
const jwtAuthverify = async(req,resp,next)=>{
    const {myTk} = req.body
// console.log(myTk);
//verify token
jwt.verify(myTk,process.env.JWT_SECRET, async(err,decodedToken)=>{
    if(err){
        console.log(err);
        resp.status(404).json({err})
    }else{
//      if(user){
//         const email = user.email
//         resp.status(200).json({email})
//         console.log(email,'am the user');
//      }else{
// console.log('error')
//      }
try{
    //get the email from token
    let user =  await memberModel.findById(decodedToken.id);
    const email = user.email;
    resp.status(200).json({status:'success',email:email})
}catch(err){
    console.log(err);
    //if no such user redirect to regestration page
}
     
     
    
    }
})
}
module.exports = {jwtAuthverify}