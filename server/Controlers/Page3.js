const  pageThreemodel =  require("../Models/Page3");
const uploadDriverDetails = async(req,resp)=>{
        // const uploadData = 
        // await pageThreemodel.create(req.body);
        // console.log(uploadData);
    try{
        // console.log(req.body);
        // console.log(req.body);
        const uploadData = 
        await pageThreemodel.create(req.body);
        console.log(uploadData);
        resp.status(200).json({
            status:'success',
            message:'uploaded succesfuly, being directed to next page',
            data:uploadData
        })
    }catch(err){
resp.status(404).json({err})
    }
}


const getDriverDetails = async(req,resp)=>{
// console.log(req.body);
const getData = await pageThreemodel.find();
console.log(getData);
resp.status(200).json({getData})
}
module.exports = {uploadDriverDetails,getDriverDetails} 