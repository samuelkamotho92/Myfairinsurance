const  pageThreemodel =  require("../Models/Page3");
const uploadDriverDetails = async (req,resp)=>{
        // const uploadData = 
        // await pageThreemodel.create(req.body);
        // console.log(uploadData);
    try{
        // console.log(req.body);
        console.log(req.body);
        const uploadData = 
        await pageThreemodel.create(req.body);
        console.log(uploadData);
        resp.status(200).json({
      status:'success',
      message:'uploaded succesfuly,click next link to proceed',
      redirect:'/accidents',
      data:uploadData
        })
    }catch(err){
// resp.status(404).json({err})
    }
}


const getDriverDetails = async(req,resp)=>{
const {email} = req.body;
const pageThreedata = await pageThreemodel.find({emailUser:email});
resp.status(200).json({pageThreedata})
}

const getPagethreedata = async(req,resp)=>{
    try{
      const {formIdUser}
       = req.body;
      console.log(formIdUser)
      const getPagedata = 
      await pageThreemodel.findOne({formIdUser:formIdUser});
      resp.status(200).json({getPagedata})
      console.log(getPagedata);
    }catch(err){
  resp.status(404).json({err});
    }
  }

  const getPagethreeid = async(req,resp)=>{
    try{
      const {currentFormId} = req.body;
      console.log( currentFormId,'page3id');
      const pageData = 
      await pageThreemodel.find({formIdUser:currentFormId});
      console.log(pageData,'value is this')
    resp.status(200).json({
      status:'success',
      redirect:'/accidents',
      pageData
    });
    }catch(err){
    console.log(err);
    resp.status(404).json({err})
    }
  }

  const patchPageThree = async(req,resp)=>{
    try
    {
      const id = req.params.id;
      console.log(id);
  const updatePagevalue = await pageThreemodel.findByIdAndUpdate(id,
    req.body,{
      new : true
    });
    resp.status(200).json({
      redirect:'/accidents',
      updatePagevalue})
    }catch(err){
  resp.status(404).json({err})
    }
  }



  const getPatcheddata = async(req,resp)=>{
    try{
      const {currentFormidenty} = req.body;
      // console.log(formIdUser,"unique id");
      console.log(currentFormidenty,'called')
      const getPagedata = await pageThreemodel.findOne({currentFormidenty:currentFormidenty});
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
      await pageThreemodel.find({formIdUser:id});
      console.log(getPagedata,"my data");
      resp.status(200).json({getPagedata})
    }catch(err){
  resp.status(404).json({err});
    }
  }
module.exports =
 {uploadDriverDetails,
  getDriverDetails,
  getPagethreedata,
  getPagedata,
  getPatcheddata,
  getPagethreeid,
  patchPageThree
} 