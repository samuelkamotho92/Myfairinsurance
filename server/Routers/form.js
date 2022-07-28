const express =  require('express');
const formcontroler = require('../Controlers/Form');
const formrouter = express.Router();
formrouter
.route("/createform")
.post(formcontroler.createForm);

formrouter
.route("/getform")
.post(formcontroler.getForm);
module.exports = formrouter;