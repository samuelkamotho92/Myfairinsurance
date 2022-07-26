const  pageOnemodel =  require("../Models/Page1");
//error handling middlware
const errorFunc = 
require("../utilities/ErrorPage1")
const uploadContent = async(req,resp)=>{
console.log(req.body);
  //get form id , check if its db
  //return the data if existing
  //if new create
// console.log(req.body)
try{
const uploadData = 
await pageOnemodel.create(req.body);
console.log(uploadData);
resp.status(200).json({
    status:'success',
    message:'Data submitted successfull,click the next link',
    redirect:'/insuredvehicle',
    data:uploadData
})
}catch(err){
resp.status(404).json({err});
}
}
const getUploadedData = async(req,resp)=>{
  const {email} = req.body;
  console.log(email,'get my data')
const pageOnedata= await pageOnemodel.find({emailUser:email});

resp.status(200).json({pageOnedata})
}

const getPageonedata = async(req,resp)=>{
      const {formIdUser} = req.body;
      console.log(formIdUser);
  try{
    // console.log(formIdUser,"unique id");
    console.log('page One data');
    console.log(formIdUser)
    const getPagedata =
     await pageOnemodel.findOne({
      formIdUser:formIdUser});
    console.log(getPagedata,"my data");
    resp.status(200).json({getPagedata})
  }catch(err){
resp.status(404).json({err});
  }
}

const getPatcheddata = async(req,resp)=>{
  try{
    const {currentFormidenty} = req.body;
    console.log(currentFormidenty)
    // console.log(formIdUser,"unique id");
    // console.log(currentFormidenty,'called')
    // const getPagedata = await pageOnemodel.findOne({
    //   formIdUser:currentFormidenty});
    // console.log(getPagedata,"my data");
    // resp.status(200).json({getPagedata})
  }catch(err){
resp.status(404).json({err});
  }
console.log('get data')
}




const getPagedata = async(req,resp)=>{
  console.log('consoling page one');
  try{
    const {id} = req.body;
    console.log('gotten page id')
    console.log(id,"unique id");
    const getPagedata = 
    await pageOnemodel.find({formIdUser:id});
    console.log(getPagedata,"my data");
    resp.status(200).json({getPagedata})
  }catch(err){
resp.status(404).json({err});
  }
}

const getPageoneid = async(req,resp)=>{
try{
  const {currentFormId} = req.body;
  console.log(currentFormId);
const pageData =
 await pageOnemodel.find({formIdUser:currentFormId});
console.log(pageData,
'value is this for page One')
resp.status(200).json({
  status:'success',
  redirect:'/insuredvehicle',
  pageData});
}catch(err){
console.log(err);
resp.status(404).json({err})
}
}
const patchPageOne = async(req,resp)=>{
  try
  {
    const id = req.params.id;
    console.log(id);
const updatePagevalue =
 await pageOnemodel.findByIdAndUpdate(id,
  req.body,{
    new : true
  });
  resp.status(200).json({
    updatePagevalue,
    redirect:'/insuredvehicle',
  })
  }catch(err){
resp.status(404).json({err})
  }
}

module.exports = 
{uploadContent,getUploadedData,getPageonedata,
  getPagedata,
  getPatcheddata,
  getPageoneid,
  patchPageOne
} 