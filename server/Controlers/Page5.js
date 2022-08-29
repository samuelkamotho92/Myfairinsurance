const pageFivemodel = require("../Models/Page5");
const uploadDamages = async(req,resp)=>{
    console.log(req.body);
    // console.log(req.body);
    const uploadData = await pageFivemodel.create(req.body);
    resp.status(200).json({
        status:'success',
        message:'uploaded successfully'
    })
}
const getDamages = async(req,resp)=>{
    // console.log(req.body);
    const getData = await pageFivemodel.find();
    console.log(getData);
    resp.status(200).json({getData})
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
  getPagedata} 