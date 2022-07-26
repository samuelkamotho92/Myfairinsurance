module.exports = (err)=>{
    //object to be updated 
    let errors = 
    {
    name:"", 
    email:"",
    password:"", 
    passwordConfirm:"" ,
}
    if(err.message === "incorrect email"){
        errors.email = "email not regestered"
        }
        if(err.message === "incorrect password"){
            errors.password = "password not regesterd"
            }
    // if(err.code === 11000){
    //     //duplicate email
    //     errors.email ="Duplicate email enter a unique one";
    //     return errors;
    // }
    //checking specific error signup errors
    if(err.message.includes("admin validation failed") 
    || err.message.includes("member validation failed")){
        Object.values(err.errors).forEach(errAuth=>{
    errors[errAuth.properties.path] = errAuth.properties.message;
        })
    }
    return errors;
}