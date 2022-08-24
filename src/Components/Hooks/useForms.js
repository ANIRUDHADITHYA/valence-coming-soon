import {useEffect, useState} from "react";
import {db} from "./../../firebaseConfig";
import { setDoc , doc } from "firebase/firestore";


const useForm = (Validate) => {
    const [values, setValues] = useState({

        email: "",
        id: "",
        date: "",
        
    })
    
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (event) => {
        const {name,value} = event.target
        setValues((preValues) => {
            return {
                ...preValues,
                [name]:value,
            }
        })
    }
    const handleSubmit = (event) =>{
        setErrors(Validate(values))
        setIsSubmit(true)        
        setID();
        setDate();
    }

    useEffect(()=>{
        const addDoc = async () => {
            try { 
                await setDoc (doc(db, "BrochureDownloads", values.id), values)
                values.email = "";
            } catch(errs){
                console.log(errs)
            }

        }

        if(Object.keys(errors).length === 0 && isSubmit){
            addDoc();
        }
    }, // eslint-disable-next-line
    [errors])
    
    const setID = () => {
        values.id = values.email.replace(/[^a-zA-Z0-9 ]/g, '');
    }

    const setDate = () => {
        var today = new Date();
            values.date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+' '+today.getHours()+':'+today.getMinutes();
    }

    return { handleChange, values, errors, handleSubmit}
}

export default useForm;