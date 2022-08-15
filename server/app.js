const express = require("express");
const path = require('path')
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const cookieParser  = require("cookie-parser");
const adminRoute = require("./Routers/adminRouters");
const memberRoute = require("./Routers/memberRouters");
const formRoute =  require("./Routers/form");
const {jwtAuthverify} = require("./Middleware/authverify.js");
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cors({origin:"http://localhost:3000",
credentials:true}));
app.use("/api/v1/admin/",adminRoute);
app.use(cookieParser());
app.use("/api/v1/member/",memberRoute);
app.use("/api/v1/form/",formRoute);

app.get('/setcookie', function(req, res){
    // setting cookies
    res.cookie('username', 'john doe', { maxAge: 900000});
    return res.status(200).json({data:'Cookie has been set'});
});
app.get('/getcookie', function(req, res) {
    const username = req.cookies['jwt'];
    if (username) {
        return res.status(200).json({username});        
    }

    return  res.status(400).json('No cookie found');
});
module.exports = app