module.exports = (err)=>{
    //object to be updated 
    let errors = 
    {
    make:"", 
    horsepw:"",
    regno:"", 
    price:"" ,
    yearmanufactured:"",
    datepurchased:'',
    stateVehicle:'',
    purposeVehicle:'',
    age:'',
    order:'',
    mileage:'',
    knowledge:'',
    passenger:'',
    hauled:'',
    goodsOwner:'',
}

    //checking specific error signup errors
    if(err.message.includes("pageOne validation failed")){
        Object.values(err.errors).forEach(errAuth=>{
    errors[errAuth.properties.path] = errAuth.properties.message;
        })
    }
    return errors;
}