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

const getPagefourid = async(req,resp)=>{
  try{
    const {currentFormId} = req.body;
    console.log( currentFormId,'page4id');
    const pageData = 
    await pageFourmodel.find({formIdUser:currentFormId});
    console.log(pageData,'value for pagefour is this')
  resp.status(200).json({pageData});
  }catch(err){
  console.log(err);
  resp.status(404).json({err})
  }
}

const patchPageFour = async(req,resp)=>{
  try
  {
    const id = req.params.id;
    console.log(id);
const updatePagevalue = 
await pageFourmodel.findByIdAndUpdate(id,
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
    const getPagedata = await pageFourmodel.findOne({
      currentFormidenty:currentFormidenty});
    console.log(getPagedata,"my data");
    resp.status(200).json({getPagedata})
  }catch(err){
resp.status(404).json({err});
  }
}

const getPagefourdata = async(req,resp)=>{
    try{
      const {formIdUser} = req.body;
      console.log(formIdUser)
      const getPagedata = 
      await pageFourmodel.findOne({formIdUser});
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
      await pageFourmodel.find({formIdUser:id});
      console.log(getPagedata,"my data");
      resp.status(200).json({getPagedata})
    }catch(err){
  resp.status(404).json({err});
    }
  }
module.exports = 
{uploadAccidentDetails,getAccidentDetails,getPagefourdata,
getPagedata,getPatcheddata,
getPagefourid,
patchPageFour} 