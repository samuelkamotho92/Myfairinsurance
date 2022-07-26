const memberModel = require("../Models/membermodel");
const express = require("express");
const app = express();
const sendEmail = require("../utilities/Email");
const  jwt = require("jsonwebtoken");
const cookieParser  = require("cookie-parser");
app.use(cookieParser());
//error handeler
const errorFunc = require('../utilities/errorHandlingFunc');
const crypto = require('crypto');
const memberJwt  = (id)=>{
return jwt.sign({id},process.env.JWT_SECRET,{
expiresIn: process.env.JWT_EXPIRES_IN
});
}

const regesterMember = async(req,resp)=>{
    try{
    // const {name,email,password,passwordConfirm} = req.body;
    console.log(req.body);
    const {name,email,password,passwordConfirm} = req.body;
    const regestered = 
    await memberModel.create({name,email,password,passwordConfirm});
        resp.status(200).json({regestered})
        console.log(regestered);    
    }catch(err){
const errMess = errorFunc(err);
resp.status(404).json({errMess});
// console.log(err);
console.log(`there is an error${errMess}`);
    }
}
const getMembers = async(req,resp)=>{
    // console.log(getMembers);
    try
    {
    memberModel.find().then((result)=>{
    resp.status(200).json({regestered:result})
})
    }catch(err){
resp.status(404).json({err})
    }
}

//create token for the approved member
const approvedMember = async(req,resp)=>{
    const {email} =  req.body;
    console.log(email);
    //send an email,check if email matches
const memberApprove = await memberModel.findOne({email});
console.log(memberApprove);
//pass the logintoken 
const memberToken = memberApprove.createLoginToken();
await memberApprove.save({ validateBeforeSave: false });
//send to to the email
const resetUrl  =  
`${req.protocol}://${req.get('host')}/api/v1/admin/approved/${memberToken}`;
const message  = 
`You have been approved,you can now login and create your accountto:${resetUrl}`
     try{
 await sendEmail({
     email:memberApprove.email,
     message:message,
     subject:'CONGRATULATIONS,YOU CAN CREATE YOUR ACCOUNT,WITHIN 30DAYS'
       }) 
    resp.status(200).json({
status:'succees',
message:'email sent successfully'
    })
}catch(err){
    memberApprove.loginToken = undefined;
    memberApprove.loginTokenExpires = undefined; 
    await memberApprove.save({ validateBeforeSave: false });
resp.status(404).json({err})
console.log(err);
       }
}

const logInMember = async(req,resp,next)=>{
const {email,password} = req.body;
    try{
        let loggedInmember = await memberModel.login(email,password);
        console.log(loggedInmember)
        const tk  = memberJwt(loggedInmember._id);
        //update the tokens
    resp.cookie("jwt",tk,
    {maxAge:process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000});
    resp.status(200).json({loggedInmember});
    }catch(err)
    {
        const errMess = errorFunc(err);
        resp.status(400).json({errMess});+
        console.log(err);
    }
}

const disApproval = async(req,resp,next)=>{
    const {email} =  req.body;
    console.log(email);
    //send an email,check if email matche
    let memberDisaproved =
     await memberModel.findOne({email});
console.log(memberDisaproved );
if(memberDisaproved){
    memberDisaproved.rejectedMember();
    await memberDisaproved.save({ validateBeforeSave: false });
    const message  = 
`Sorry, not allowed to create an account with us`
     try{
 await sendEmail({
     email:memberDisaproved.email,
     message:message,
     subject:'DISAPROVAL FOR YOUR ACCOUNT'
       }) 
    resp.status(200).json({
status:'succees',
message:'email sent successfully'
    })
}catch(err){
resp.status(404).json({err})
console.log(err);
       };
}else{
    console.log(err);
}
}

//send to to the email

const getApprovedMembers =  async(req,resp)=>{
    const status = 'approved'
    try{
 const getApproved  =
  await memberModel.find({"memberStatus":status});
 resp.status(200).json({getApproved})
    }catch(err){
resp.status(404).json({err});
    }
}

const getDisapprovedMembers =  async(req,resp)=>{
    const status = "disapproved"
    try{
memberModel.find({"memberStatus":status}).then((result)=>{
    resp.status(200).json({getmembers:result})
})
}catch(err){
resp.status(404).json({err});
    }
}
//password reset
  //get token
  const forgotPassword  = async (req,resp,next)=>{
    const getMember = 
    await memberModel.findOne({email:req.body.email})
    console.log(getMember)
    const resetToken = getMember.createPasswordResetToken();
      console.log(resetToken);
      await getMember.save({ validateBeforeSave: false });
//send to to the email 
//clicke taken to page to update password
const resetUrl  =  
`${req.protocol}://${req.get(3000)}/memberResetpass`;
const message  = 
`Forgot your password? Submit a PATCH request with your new password and
passwordConfirm to:${resetUrl}.If you didn't forget your password, please ignore this email!`
try{
await sendEmail({
email:getMember.email,
message:message,
subject:'password reset, is valid for 1day only',
html:`
<a href=${resetUrl}>Click here</a>
`
 }) 
resp.status(200).json({
  status:'succees',
  message:'email sent successfully'
})
}catch(err){
getMember.passwordResetToken = undefined;
getMember.passwordResetExpires = undefined; 
await getMember.save({ validateBeforeSave: false });
resp.status(404).json({err})
console.log(err);
 }
}

const getCookie = async(req,resp,next)=>{
const cookies = req.cookies
console.log(cookies);
}
//get individual data

module.exports = {
    regesterMember,
    getMembers,
    approvedMember,
    logInMember,
    disApproval,
    getApprovedMembers,
    getDisapprovedMembers,
    forgotPassword,
    getCookie
};
