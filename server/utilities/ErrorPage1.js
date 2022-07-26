module.exports = (err)=>{
    //object to be updated 
    let errors = 
    {
    policy:"", 
    claimNo:"",
    renewDate:"", 
    insuredName:"" ,
    postalAddress:"",
    tellNo:'',
    street:'',
    district:'',
    occupation:''
}
    if(err.code === 11000){
        //duplicate email
        errors.policy ="Duplicate policy no enter a unique one";
        errors.claimNo ="Duplicate policy no enter a unique one";
        return errors;
    }
    //checking specific error signup errors
    if(err.message.includes("pageOne validation failed")){
        Object.values(err.errors).forEach(errAuth=>{
    errors[errAuth.properties.path] = errAuth.properties.message;
        })
    }
    return errors;
}