const pageSevenmodel = require('../Models/Page7');
const uploadGeneral = async(req,resp)=>{
    console.log(req.body);
    // console.log(req.body);
    const uploadData = 
    await pageSevenmodel.create(req.body);
    console.log(uploadData);
    resp.status(200).json({uploadData})
}
const getGeneral = async(req,resp)=>{
    // console.log(req.body);
    const getData = await pageSevenmodel.find();
    console.log(getData);
    resp.status(200).json({getData})
}
module.exports = {uploadGeneral,getGeneral} 