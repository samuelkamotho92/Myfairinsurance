const FormModel =  require("../Models/form");
const errorHandler = (err)=>{
    //object to be updated 
    let errors = 
    {
    email:"",
    formId:"", 
}
    if(err.code === 11000){
        //duplicate email
        errors.email =" email already regestered";
        errors.formId ="id registered";
        return errors;
    }
    //checking specific error signup errors
    if(err.message.includes("form validation failed")){
        Object.values(err.errors).forEach(errAuth=>{
    errors[errAuth.properties.path] = errAuth.properties.message;
        })
    }
    return errors;
}
const createForm = async(req,resp)=>{
    try
    {
const {email,formId} = req.body;
const createdForm = await FormModel.create({email,formId});
console.log(createdForm);
resp.status(200).json({createdForm});
    }catch(err){
        const errorMess = errorHandler(err);
        resp.status(404).json({errorMess})
    }
}
const getForm = async(req,resp)=>{
    const {emailUser} = req.body;
    const getDetails =
     await FormModel.findOne({email:emailUser});
     console.log(getDetails)
     const formId = getDetails.formId
    resp.status(200).json({formId});
}

module.exports = {createForm,getForm}