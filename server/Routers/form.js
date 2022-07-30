const express =  require('express');
const formcontroler = require('../Controlers/Form');
const pageOneControler = require('../Controlers/Page1');
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
module.exports = formrouter;