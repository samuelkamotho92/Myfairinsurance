//import model
const  adminmodel =  require("../Models/adminmodel");
const sendEmail = require("../utilities/Email");
const  jwt = require("jsonwebtoken");
const crypto  = require("crypto");
const adminJwt  = (id)=>{
return jwt.sign({id},process.env.JWT_SECRET,{
expiresIn: process.env.JWT_EXPIRES_IN
});
}
//error handling
const handleError = (err)=>{
    console.log(err.message,err.code);
    let errors = { email:"", password:"",passwordconfirm:""}
    if(err.message === "incorrect email"){
      errors.email = "email not regesterd"
      }
      if(err.message === "incorrect password"){
          errors.password = "password not regestered"
          }
    //checking specific error
    if(err.message.includes("user validation failed")){
        Object.values(err.errors).forEach(errAuth=>{
            errors[errAuth.properties.path] = errAuth.properties.message;
        })
    }
    return errors;
    };
    const adminLogin = async (req, resp) => {
        const {email,password} = req.body
        console.log(req.body);
        console.log(email,password);
        try {
           const admin = await adminmodel.login(email,password);
           console.log(admin,"controller");
           const tk  = adminJwt(admin._id);
      resp.cookie("jwt",tk,{maxAge:process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000})
           resp.status(200).json({admin});
        } catch (err) {
            const errMess =  handleError(err);
          resp.status(400).json({errMess})
        }
      };
      //get token
      const forgotPassword  = async (req,resp,next)=>{
          const getAdmin = await adminmodel.findOne({email:req.body.email})
          console.log(getAdmin)
          const resetToken = getAdmin.createPasswordResetToken();
            console.log(resetToken);
            await getAdmin.save({ validateBeforeSave: false });
//send to to the email
const resetUrl  =  
`${req.protocol}://${req.get('host')}/api/v1/admin/resetpassword/${resetToken}`;
const message  = 
`Forgot your password? Submit a PATCH request with your new password and
 passwordConfirm to:${resetUrl}.If you didn't forget your password, please ignore this email!`
     try{
 await sendEmail({
     email:getAdmin.email,
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
    getAdmin.passwordResetToken = undefined;
    getAdmin.passwordResetExpires = undefined; 
    await getAdmin.save({ validateBeforeSave: false });
resp.status(404).json({err})
console.log(err);
       }
}


const resetPassword = async(req,resp,next)=>{
  const {password} = req.body;
  console.log(password);
  // console.log(req.params.token);
  // 1) Get user based on the token
      //hash it first
      const hashedToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');
  //2)get based on hashed valuec
    const admin = await adminmodel.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() }
    });
    console.log(admin);
    console.log(admin.password,admin.email);
  
    // console.log(password);
    // 2) If token has not expired, and there is user, set the new password
    // if (!admin) {
    //   console.log('admin does not exist');
    // }
    admin.password = password;
    admin.passwordResetToken = undefined;
    admin.passwordResetExpires = undefined;
    await admin.save({validateBeforeSave: false});
    // // 3) Update changedPasswordAt property for the user
    // 4) Log the user in, send JWT
    const loggedToken  =  adminJwt(admin._id);
    resp.cookie('logged in', loggedToken, {
      maxAge: process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000
    });
    resp.status(200).json({
      status:"success",
      token:loggedToken,
      message:"Admin Logged in succesfully",
      newadmin:admin
    })
}
module.exports = {adminLogin,forgotPassword,resetPassword};