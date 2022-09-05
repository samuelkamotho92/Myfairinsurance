const pageTwoModel = require("../Models/Page2");
const  pageTwomodel =  require("../Models/Page2");
const uploadInsuredVehicle = async(req,resp)=>{
    //check from form 
    try{
      console.log(req.body,'send data')
const uploadData = 
await pageTwomodel.create(req.body);
console.log(uploadData);
        resp.status(200).json({
            status:"success",
            message:'Data sucessfully sent,you are being redirected to next page'
        })
    }catch(err){
resp.status(404).json({err});
}
}

const getPagetwoid = async(req,resp)=>{
  console.log('page 2');
  try{
    const {currentFormId} = req.body;
    console.log( currentFormId,'page2id');
    const pageData = 
    await pageTwomodel.find({formIdUser:currentFormId});
    console.log(pageData,'value is this')
  resp.status(200).json({pageData});
  }catch(err){
  console.log(err);
  resp.status(404).json({err})
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

  const patchPageTwo = async(req,resp)=>{
    try
    {
      const id = req.params.id;
      console.log(id);
  const updatePagevalue = await pageTwomodel.findByIdAndUpdate(id,
    req.body,{
      new : true
    });
    resp.status(200).json({updatePagevalue})
    }catch(err){
  resp.status(404).json({err})
    }
  }
  const getPatcheddata = async(req,resp)=>{
    try{
      const {currentFormidenty} = req.body;
      // console.log(formIdUser,"unique id");
      console.log(currentFormidenty,'called')
      const getPagedata = await pageTwomodel.findOne({
        currentFormidenty:currentFormidenty});
      console.log(getPagedata,"my data");
      resp.status(200).json({getPagedata})
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
{uploadInsuredVehicle,getInsuredVehicle,getPagetwodata,
  getPagedata,getPatcheddata,getPagetwoid,patchPageTwo} 