const pageFivemodel = require("../Models/Page5");
const uploadDamages = async(req,resp)=>{
    console.log(req.body);
    // console.log(req.body);
    const uploadData = 
    await pageFivemodel.create(req.body);
    console.log(uploadData);
}
const getDamages = async(req,resp)=>{
    // console.log(req.body);
    const getData = await pageFivemodel.find();
    console.log(getData);
    resp.status(200).json({getData})
}
module.exports = {uploadDamages,getDamages} 