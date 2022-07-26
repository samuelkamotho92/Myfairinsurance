const pageEightmodel = require('../Models/Page8');
const uploadFinal = async(req,resp)=>{
    console.log(req.body);
    // console.log(req.body);
    const uploadData = 
    await pageEightmodel.create(req.body);
    console.log(uploadData);
    resp.status(200).json({uploadData})
}
const getFinal = async(req,resp)=>{
    // console.log(req.body);
    const getData = await pageEightmodel.find();
    console.log(getData);
    resp.status(200).json({getData})
}
module.exports = {uploadFinal,getFinal} 