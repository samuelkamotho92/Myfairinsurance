const pageFivemodel = require("../Models/Page5");
const uploadDamages = async(req,resp)=>{
  try{
    console.log(req.body);
    // console.log(req.body);
    const uploadData = await pageFivemodel.create(req.body);
    resp.status(200).json({
        status:'success',
        message:'uploaded successfully',
        data:uploadData
    })
  }catch(err){
resp.status(404).json({err});
  }
}
const getDamages = async(req,resp)=>{
    // console.log(req.body);
    const getData = await pageFivemodel.find();
    console.log(getData);
    resp.status(200).json({getData})
}

const getPagefiveid = async(req,resp)=>{
  try{
    const {currentFormId} = req.body;
    console.log( currentFormId,'page5id');
    const pageData = 
    await pageFivemodel.find({formIdUser:currentFormId});
    console.log(pageData,'value is this')
  resp.status(200).json({pageData});
  }catch(err){
  console.log(err);
  resp.status(404).json({err})
  }
}

const patchPageFive = async(req,resp)=>{
  try
  {
    const id = req.params.id;
    console.log(id);
const updatePagevalue = 
await pageFivemodel.findByIdAndUpdate(id,
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
    const getPagedata = await pageFivemodel.findOne({
      currentFormidenty:currentFormidenty});
    console.log(getPagedata,"my data");
    resp.status(200).json({getPagedata})
  }catch(err){
resp.status(404).json({err});
  }
}

const getPagefivedata = async(req,resp)=>{
    try{
      const {formIdUser} = req.body;
      console.log(formIdUser)
      const getPagedata = 
      await pageFivemodel.findOne({formIdUser});
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
      await pageFivemodel.find({formIdUser:id});
      console.log(getPagedata,"my data");
      resp.status(200).json({getPagedata})
    }catch(err){
  resp.status(404).json({err});
    }
  }
module.exports = 
{uploadDamages,
  getDamages,
  getPagefivedata,
  getPagedata,
  getPatcheddata,
  getPagefiveid,
  patchPageFive} 