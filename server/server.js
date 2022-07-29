const mongoose =  require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path:'./config.env'});
const app = require("./app.js");
const port = process.env.PORT || 8080;
const dBurl = process.env.DATABASE_URL;
mongoose.connect(dBurl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(port,()=>{
        console.log(Math.floor(Date.now()/1000));
        console.log(`Server is running on port ${port}`);
    })
}).catch(err => console.log(err));