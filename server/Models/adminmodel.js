const mongoose = require("mongoose");
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const Schema = mongoose.Schema;
const adminSchema = new Schema({
    email:{
        type:String,
        required:[true,'please enter your email'],
        validate:[isEmail,'please enter a a valid email'],
        lowercase:true,
        unique:[true]
    },
    password:{
        type:String,
        required:[true,'please enter your password'],
        minlength:[8,"please enter 8 or more characters"],
    },
    role:{
      type:String,
      role:'admin'
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date
})
// adminSchema.pre('save', async function(next) {
  // Only run this function if password was actually modified
  // if (!this.isModified('password')) return next();

  // // Hash the password with cost of 12
  // this.password = await bcrypt.hash(this.password, 12);

  // // Delete passwordConfirm field
  // this.passwordConfirm = undefined;
  // next();
// });

adminSchema.pre('save', function(next) {
  if (!this.isModified('password') || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

adminSchema.statics.login = async function (email,password) {
    const admin = await this.findOne({email});
    console.log(admin,password);
    if(admin)
    {
  if(admin.password === password){
 return admin;
  }
  throw Error("incorrect password");
    }
    throw Error("incorrect email");
  }
  adminSchema.methods.createPasswordResetToken = function() {
    const resetToken = crypto.randomBytes(32).toString('hex');
  //hashing the token and save it to database
    this.passwordResetToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');
    console.log({ resetToken }, this.passwordResetToken);
  //set the expiring time for the token
    this.passwordResetExpires = Date.now() + 24 * 60 * 60 * 1000;
  //return the unhashed password
    return resetToken;
  };
const adminmodel = mongoose.model('admin',adminSchema);
module.exports = adminmodel;

