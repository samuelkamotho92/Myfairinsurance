const {pageSixmodel} = require('../Models/Page6');
const  {pageSixremaining} = require("../Models/Page6");
const uploadPersondetails = async(req,resp)=>{
console.log(req.body);
try{
  const personDetails =  
  await pageSixmodel.create(req.body);
resp.status(200).json({personDetails});
}catch(err){
resp.status(404).json({err})
}
}
const uploadResult = async(req,resp)=>{
    console.log(req.body);
    try{
const getremainingData =  await pageSixremaining.create(req.body);
resp.status(200).json({getremainingData,message:"success"});
    }catch(err){
resp.status(404).json({err});
    }
}
const getPagesixid = async(req,resp)=>{
  try{
    const {currentFormId} = req.body;
    console.log( currentFormId,'page6id');
    const pageData = 
    await pageSixremaining.find({formIdUser:currentFormId});
    console.log(pageData,'value is this')
  resp.status(200).json({pageData});
  }catch(err){
  console.log(err);
  resp.status(404).json({err})
  }
}
const patchPageSix = async(req,resp)=>{
  try
  {
    const id = req.params.id;
    console.log(id);
const updatePagevalue = 
await pageSixremaining.findByIdAndUpdate(id,
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
    const getPagedata = await pageSixmodel.findOne({
      currentFormidenty:currentFormidenty});
    console.log(getPagedata,"my data");
    resp.status(200).json({getPagedata})
  }catch(err){
resp.status(404).json({err});
  }
}

const getResult = async(req,resp)=>{
    try{
        const {formIdUser} = req.body;
        const getPagedata = 
        await pageSixremaining.findOne({formIdUser});
        resp.status(200).json({getPagedata})
        console.log(getPagedata);
      }catch(err){
    resp.status(404).json({err});
      }
}
const getPagedata = async(req,resp)=>{
    try{
      const {id} = req.body;
      console.log(id,"unique id is here");
      const getPagedata = 
      await pageSixremaining.find({formIdUser:id});
    //   console.log(getPagedata,"my data is here");
      resp.status(200).json({getPagedata})
    }catch(err){
  resp.status(404).json({err});
    }
}
  const getPersonaldata = async(req,resp)=>{
    console.log('working fine');
//     try{
//       const {userEmail} = req.body;
//       console.log(userEmail,"no email");
//       const getPagedata = 
//       await pageSixmodel.find({emailUser:userEmail});
//       console.log(getPagedata,"my data");
//       resp.status(200).json({getPagedata})
//     }catch(err){
//   resp.status(404).json({err});
//     }
}
  

module.exports = {
    uploadPersondetails,
    uploadResult,
    getResult,
    getPagedata,
    getPersonaldata,
    getPatcheddata,
    getPagesixid,
    patchPageSix
} 