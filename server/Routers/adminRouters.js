const express  = require("express");
const adminHandler = 
require("../Controlers/adminControler");
const memberHandler =
require("../Controlers/memberControler");
const pageOnehandler = require("../Controlers/Page1");
const pageTwohandler = require("../Controlers/Page2");
const pageThreehandler = require("../Controlers/Page3");
const pageFourhandler = require("../Controlers/Page4");
const pageFivehandler = require("../Controlers/Page5");
const formControler =  require("../Controlers/Form");
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

adminRouter
.route("/formdatas")
.get(formControler.getAllData);


adminRouter
.route("/personaldetails")
.post(pageOnehandler.getPagedata);

adminRouter
.route("/vehicledetails")
.post(pageTwohandler.getPagedata);

adminRouter
.route("/driverdetails")
.post(pageThreehandler.getPagedata);

adminRouter
.route("/accidentsDetails")
.post(pageFourhandler.getPagedata);

adminRouter
.route("/damagesDetails")
.post(pageFivehandler.getPagedata);

adminRouter
.route('/getToken')
.post(adminHandler.checkAdmin);
module.exports = adminRouter;