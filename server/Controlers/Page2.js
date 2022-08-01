const pageTwoModel = require("../Models/Page2");
const  pageTwomodel =  require("../Models/Page2");
const uploadInsuredVehicle = async(req,resp)=>{
    //check from form 
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
    const {email} =
     req.body
    console.log(email,'get my data')
  const pageTwodata= 
  await pageTwoModel.find({emailUser:email});
  
  resp.status(200).json({pageTwodata})
}
// db.collection.findOne({"_id":o_id});

const getPagetwodata = async(req,resp)=>{
    try{
      const {formIdUser} = req.body;
      console.log(formIdUser)
      const getPagedata = 
      await pageTwomodel.findOne({formIdUser});
      resp.status(200).json({getPagedata})
      console.log(getPagedata);
    }catch(err){
  resp.status(404).json({err});
    }
  }

  const getPagedata = async(req,resp)=>{
    try{
      const {id} = req.body;
      console.log(id,"unique id");
      const getPagedata = 
      await pageTwomodel.find({formIdUser:id});
      console.log(getPagedata,"my data");
      resp.status(200).json({getPagedata})
    }catch(err){
  resp.status(404).json({err});
    }
  }

module.exports = 
{uploadInsuredVehicle,getInsuredVehicle,getPagetwodata,getPagedata} 