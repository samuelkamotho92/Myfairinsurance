const  pageFourmodel =  require("../Models/Page4");
const uploadAccidentDetails = async(req,resp)=>{
console.log(req.body);
// console.log(req.body);
const uploadData = 
await pageFourmodel.create(req.body);
resp.status(200).json({
    status:'success',
    message:'uploaded succesfuly'
})
}


const getAccidentDetails = async(req,resp)=>{
// console.log(req.body);
const getData = await pageFourmodel.find();
console.log(getData);
resp.status(200).json({getData})
}
module.exports = {uploadAccidentDetails,getAccidentDetails} 