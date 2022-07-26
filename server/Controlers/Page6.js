const pageSixmodel = require('../Models/Page6');
const uploadResult = async(req,resp)=>{
    console.log(req.body);
    // console.log(req.body);
    const uploadData = 
    await pageSixmodel.create(req.body);
    console.log(uploadData);
}
const getResult = async(req,resp)=>{
    // console.log(req.body);
    const getData = await pageSixmodel.find();
    console.log(getData);
    resp.status(200).json({getData})
}
module.exports = {uploadResult,getResult} 