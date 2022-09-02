const express =  require('express');
const formcontroler = require('../Controlers/Form');
const pageOneControler = require('../Controlers/Page1');
const pageTwoControler = require('../Controlers/Page2');
const pageThreeControler = require('../Controlers/Page3');
const pageFourControler = require("../Controlers/Page4");
const pageFiveControler = require('../Controlers/Page5');
const pageSixControler = require('../Controlers/Page6');
const formrouter = express.Router();
formrouter
.route("/createform")
.post(formcontroler.createForm);

formrouter
.route("/getform")
.post(formcontroler.getForm);

formrouter
.route("/pageOne")
.post(pageOneControler.getPageonedata);

formrouter
.route("/patchedData")
.post(pageOneControler.getPatcheddata);

formrouter
.route("/pageTwo")
.post(pageTwoControler.getPagetwodata);

formrouter
.route("/patchedpageTwo")
.post(pageTwoControler.getPatcheddata);

formrouter
.route("/pageThree")
.post(pageThreeControler.getPagethreedata);

formrouter
.route("/patchedpageThree")
.post(pageThreeControler.getPatcheddata);

formrouter
.route("/pageFour")
.post(pageFourControler.getPagefourdata);

formrouter
.route("/patchedpageFour")
.post(pageFourControler.getPatcheddata);

formrouter
.route("/pageFive")
.post(pageFiveControler.getPagefivedata);

formrouter
.route("/patchedpageFive")
.post(pageFiveControler.getPatcheddata);

formrouter
.route("/personalforms")
.post(formcontroler.getMemberform)

formrouter
.route("/approvedform")
.post(formcontroler.approveForm);

formrouter
.route("/rejectedform")
.post(formcontroler.rejectedForm);

formrouter
.route("/pendingform")
.post(formcontroler.pendingForm);


formrouter
.route("/resultpatient")
.post(pageSixControler.uploadPersondetails)

formrouter
.route("/resultdetails")
.post(pageSixControler.uploadResult);

formrouter
.route("/pageSix")
.post(pageSixControler.getResult);

formrouter
.route("/patchedpageSix")
.post(pageSixControler.getPatcheddata)

formrouter
.route("/patchingformdata")
.post(formcontroler.patchForm);
module.exports = formrouter;