const express  = require("express");
const adminHandler = 
require("../Controlers/adminControler");
const memberHandler =
require("../Controlers/memberControler")
const adminRouter = express.Router();

adminRouter
.route("/login")
.post(adminHandler.adminLogin);

adminRouter.route("/getmembers")
.get(memberHandler.getMembers)

adminRouter
.route("/forgotpassword")
.post(adminHandler.forgotPassword);

adminRouter
.route("/resetpassword/:token")
.patch(adminHandler.resetPassword);

adminRouter
.route("/approved")
.post(memberHandler.approvedMember)
.get(memberHandler.getApprovedMembers)

adminRouter
.route("/approved/:token")
.post(memberHandler.logInMember);

adminRouter
.route("/disapproved")
.post(memberHandler.disApproval)
.get(memberHandler.getDisapprovedMembers);
module.exports = adminRouter;