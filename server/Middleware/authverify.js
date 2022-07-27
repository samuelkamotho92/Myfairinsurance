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
        //get the email from token
     let user =  await memberModel.findById(decodedToken.id);
     const email = user.email
     console.log(email,'am the user');
     resp.status(200).json({email})
    }
})
}
module.exports = {jwtAuthverify}