const FormModel =  require("../Models/form");
const errorHandler = (err)=>{
    //object to be updated 
    let errors = 
    {
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
const {formId,emailUser} = req.body;
const createdForm = 
 await FormModel.create({formId,emailUser});
console.log(createdForm,'created');
resp.status(200).json({createdForm});
    }catch(err){
        // const errorMess = errorHandler(err);
        resp.status(404).json({err})
    }
}
const getForm = async(req,resp)=>{
    const {formIdUser} = req.body;
    const getDetails =
     await FormModel.findOne({formId:formIdUser});
     console.log(getDetails)
     const formId = getDetails.formId
    resp.status(200).json({formId});
}

const getAllData = async(req,resp)=>{
    try
    {
        const myForms = await FormModel.find();
        console.log(myForms);
        resp.status(200).json({myForms})
    }catch(err){
resp.status(404).json({err})
    }

}

const approveForm = async(req,resp,next)=>{
    const {formId} =  req.body;
    console.log(formId);
    //send an email,check if email matche
    let getform =
     await FormModel.findOne({formId});
console.log(getform);
if(getform){
    getform.approvedFormed();
    await getform.save({ validateBeforeSave: false });
    const message  = 
`Sorry, not allowed to create an account with us`
     try{
    resp.status(200).json({
status:'success',
message:'all is fine',
data:getform
    })
}catch(err){
resp.status(404).json({err})
console.log(err);
       };
}else{
    console.log(err);
}
}

const rejectedForm = async(req,resp)=>{
    try{
        const {formId} = req.body;
        //check form does exist
        let getform =
         await FormModel.findOne({formId});
        if(getform){
            console.log(getform);
            getform.rejectedFormed();
            await getform.save({ validateBeforeSave: false });
            resp.status(200).json({
                status:"success",
                data:getform
            })
        }else{
            console.log('something is very wrong')
        }
    }catch(err){
resp.status(404).json({
    status:'failure',
    message:'something is very wrong'
})
}
}
const pendingForm = async(req,resp)=>{
    try{
        const {formId,adminComments} = req.body;
        //check form does exist
        let getform =
         await FormModel.findOne({formId});
         //get form pass the data which user does inputs
        if(getform){
            console.log(getform);
            console.log(adminComments);
            getform.pendingFormed(adminComments);
            await getform.save({ validateBeforeSave: false });
            resp.status(200).json({
                status:"success",
                data:getform
            })
        }else{
            console.log('something is very wrong')
        }
    }catch(err){
resp.status(404).json({
    status:'failure',
    message:'something is very wrong'
})
}
}
const getMemberform = async(req,resp)=>{
    const {email} = req.body;
    console.log(email);
    try
    {
        const persInfo = 
        await FormModel.find({emailUser:email});
        console.log(persInfo);
        resp.status(200).json({persInfo});
    }catch(err){
resp.status(404).json({err});
    }
}

const patchForm = async(req,resp)=>{
    try{
//get the form id
const {formIdenty,emailUser} = req.body;
console.log(formIdenty);
resp.status(200).json({
    status:"success",
    redirect:"/form",
    formIdenty,
    emailUser
})
    }catch(err){
resp.status(400).json({
    status:'failure',  
})
    }

//check status then direct to the specific form section
// const getForm = await FormModel.find({formId:formId});
// //check status
// console.log(getForm);
//
}

module.exports = {createForm,
getForm,
getAllData,
getMemberform,
approveForm,
rejectedForm,
pendingForm,
patchForm
};