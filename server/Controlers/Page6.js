const pageSixmodel = require('../Models/Page6');
const uploadResult = async(req,resp)=>{
    console.log(req.body);
    // console.log(req.body);
    const uploadData = 
    await pageSixmodel.create(req.body);
    console.log(uploadData);
    resp.status(200).json({
        status:'success',
        message:'uploaded successfully'
    })
}
const getResult = async(req,resp)=>{
    // console.log(req.body);
    const getPagedata = await pageSixmodel.find();
    console.log(getPagedata);
    resp.status(200).json({getPagedata})
}
module.exports = {uploadResult,getResult} 