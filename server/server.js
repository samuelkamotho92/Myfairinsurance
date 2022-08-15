const mongoose =  require("mongoose");
const express = require("express");
const path = require('path');
const dotenv = require("dotenv");
dotenv.config({path:'./config.env'});
const app = require("./app.js");
const port = process.env.PORT || 8080;
const dBurl = process.env.DATABASE_URL;
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join("public")));
    const myPath = '/Users/user/Documents/Myfairinsurance';
    app.get("*", function (_, res) {
        console.log(__dirname);
        res.sendFile(path.join(__dirname + "/public/index.html"),
          function (err) {
            if (err) {
              res.status(500).send(err);
            }
          }
        );
      });
    }
mongoose.connect(dBurl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    })
}).catch(err => console.log(err));