const  pageTwomodel =  require("../Models/Page2");
const uploadInsuredVehicle = async(req,resp)=>{
    
    console.log(req.body)

    
    try{
//         // console.log(req.body);
//         // console.log(req.body);
const uploadData = await pageTwomodel.create(req.body);
console.log(uploadData);
        resp.status(200).json({
            status:"success",
            message:'Data sucessfully sent,you are being redirected to next page'
        })
    }catch(err){
resp.status(404).json({err});
}
}



const getInsuredVehicle = async(req,resp)=>{
// console.log(req.body);
const getData = await pageTwomodel.find();
console.log(getData);
resp.status(200).json({getData})
}
module.exports = {uploadInsuredVehicle,getInsuredVehicle} 