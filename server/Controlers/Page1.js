const  pageOnemodel =  
require("../Models/Page1");
//error handling middlware
const errorFunc = 
require("../utilities/ErrorPage1")
const uploadContent = async(req,resp)=>{
  //get form id , check if its db
  //return the data if existing
  //if new create
console.log(req.body)
try{
const uploadData = 
await pageOnemodel.create(req.body);
console.log(uploadData);
resp.status(200).json({
    status:'success',
    message:'Data submitted successfull,your are being directed to next page',
    data:uploadData
})
}catch(err){
    const errorFunction = errorFunc(err)
resp.status(404).json({errorFunction});
}
}
const getUploadedData = async(req,resp)=>{
  const {email} = req.body
  console.log(email,'get my data')
const pageOnedata= await pageOnemodel.find({emailUser:email});

resp.status(200).json({pageOnedata})
}
module.exports = {uploadContent,getUploadedData} 