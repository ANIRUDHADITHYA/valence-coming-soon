export default function Validate(values){

    let errors = {};


    if(!values.email.trim()){
        errors.email = "Enter Email Address"
    } 
    //eslint-disable-next-line 
    else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)){
        errors.email = "Invalid Email"
    }

    
    return errors;
}