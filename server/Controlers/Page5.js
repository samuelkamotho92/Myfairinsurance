const pageFivemodel = require("../Models/Page5");
const uploadDamages = async(req,resp)=>{
    console.log(req.body);
    // console.log(req.body);
    const uploadData = await pageFivemodel.create(req.body);
    resp.status(200).json({
        status:'success',
        message:'uploaded successfully being redirected to next page'
    })
}
const getDamages = async(req,resp)=>{
    // console.log(req.body);
    const getData = await pageFivemodel.find();
    console.log(getData);
    resp.status(200).json({getData})
}
module.exports = {uploadDamages,getDamages} 