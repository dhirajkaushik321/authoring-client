import { useState } from 'react';
import { registrationFields} from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import RegisterUser from '../models/user.register.model';
import axios from 'axios';
import Message from './Message';

const fields=registrationFields;
const registerApi = process.env.REACT_APP_REGISTER_API;

export default function Register(){
    const [registrationState,setRegistrationState]=useState<RegisterUser>({username:"",password:"",email:"",confirmPassword:""});
    const [successMessage,setSuccessMessage]=useState<string>("")
    const [errorMessage,setErrorMessage]=useState<string>("") 
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setRegistrationState({...registrationState,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
    registerUser();
    }
    

    //Handle Login API Integration here
    const registerUser = async() =>{
        console.log("Submission data",registrationState)
        console.log('registerApi: ', registerApi);
    //make a axios post request to registerApi endpoint and pass registrationState as body data
    try {
        if(registerApi){
            await axios.post(
                registerApi,registrationState)
                setSuccessMessage('User registered successfuly!')
                // alert(`User registered successfuly!`);
        
            }
        }
     catch (error) {
        //handling error in case the request fails
        setErrorMessage('Error occured while registering user')
        // alert(`Error occured while registering user`);
    }
   
}
    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={registrationState[field.name]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                    />
                
                )
            }
        </div>

        <FormExtra/>
        <FormAction  action='submit' handleSubmit={handleSubmit} text="Register"/>
        {successMessage && <Message type={"success"} message={successMessage} />}
      {errorMessage && <Message type={"error"} message={errorMessage} />}
      </form>
    )
}