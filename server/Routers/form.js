const express =  require('express');
const formcontroler = require('../Controlers/Form');
const pageOneControler = require('../Controlers/Page1');
const pageTwoControler = require('../Controlers/Page2');
const pageThreeControler = require('../Controlers/Page3');
const pageFourControler = require("../Controlers/Page4");
const pageFiveControler = require('../Controlers/Page5')
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
.route("/pageTwo")
.post(pageTwoControler.getPagetwodata);

formrouter
.route("/pageThree")
.post(pageThreeControler.getPagethreedata);

formrouter
.route("/pageFour")
.post(pageFourControler.getPagefourdata);

formrouter
.route("/pageFive")
.post(pageFiveControler.getPagefivedata);

formrouter
.route("/personalforms")
.post(formcontroler.getMemberform)
module.exports = formrouter;