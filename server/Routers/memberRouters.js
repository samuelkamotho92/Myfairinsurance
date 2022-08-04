const express = require("express");
const memberRoute = express.Router();
const memberControler = 
require("../Controlers/memberControler");
const memberVerify = require('../Middleware/authverify')
const pageOneControler  = require("../Controlers/Page1");
const pageTwoControler  = require("../Controlers/Page2");
const pageThreeControler  = require("../Controlers/Page3");
const pageFourControler   = require("../Controlers/Page4");
const pageFiveControler = require("../Controlers/Page5");
const pageSixControler = require("../Controlers/Page6");
const pageSevenControler = require('../Controlers/Page7');
const pageEightControler = require('../Controlers/Page8');
memberRoute
.route("/regester")
.post(memberControler.regesterMember)

memberRoute
.route("/login")
.post(memberControler.logInMember);


memberRoute
.route('/pageOne')
.post(pageOneControler.uploadContent)
.get(pageOneControler.getUploadedData)

memberRoute
.route('/pageTwo')
.post(pageTwoControler.uploadInsuredVehicle)
.get(pageTwoControler.getInsuredVehicle);

memberRoute
.route('/pageThree')
.post(pageThreeControler.uploadDriverDetails)
.get(pageThreeControler.getDriverDetails)

memberRoute
.route('/pageFour')
.post(pageFourControler.uploadAccidentDetails)
.get(pageFourControler.getAccidentDetails);

memberRoute
.route('/pageFive')
.post(pageFiveControler.uploadDamages)
.get(pageFiveControler.getDamages)

memberRoute
.route('/pageSix')
.post(pageSixControler.uploadResult)
.get(pageSixControler.getResult)

memberRoute
.route('/pageSeven')
.post(pageSevenControler.uploadGeneral)
.post(pageSevenControler.getGeneral)

memberRoute
.route('/pageEight')
.post(pageEightControler.uploadFinal)
.get(pageEightControler.getFinal)

memberRoute
.route('/authverify')
.post(memberVerify.jwtAuthverify)

memberRoute
.route('/getcookie')
.get(memberControler.getCookie);

memberRoute
.route('/getinfo')
.post(pageOneControler.getUploadedData);

memberRoute
.route('/getpagetwo')
.post(pageTwoControler.getInsuredVehicle);

memberRoute
.route("/getpagethree")
.post(pageThreeControler.getDriverDetails);

memberRoute
.route("/checkmember")
.post(memberControler.checkMember);
module.exports = memberRoute;