import { useCallback, useEffect, useState } from 'react';
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
//write registrationState validation logi in useEffect that will execute whenever any of the state variable changes



    const [registrationState,setRegistrationState]=useState<RegisterUser>({username:"",password:"",email:"",confirmPassword:""});
    //create registrationValidationState
    const [registrationValidationError,setRegistrationValidationError]=useState<RegisterUser>({username:"",password:"",email:"",confirmPassword:""});
    const [successMessage,setSuccessMessage]=useState<string>("")
    const [errorMessage,setErrorMessage]=useState<string>("") 
    //wrap below function in useCallback
    //to avoid re-render on every change of state

    const validateField = useCallback((fieldName: string, value: string) => {
        setRegistrationValidationError(prevErrors => ({
          ...prevErrors,
          [fieldName]: value ? "" : `${fieldName} is required.`
        }));
      }, []);
      
    
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setRegistrationState(prevState => ({ ...prevState, [name]: value }));
            validateField(name, value); // Pass the latest value to the validateField function
          };

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
                       < ><Input
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
                    {registrationValidationError[field.name] && <Message type={"error"} size='small' message={registrationValidationError[field.name]} />}
                    </>
                
                )
            }
        </div>

        <FormExtra/>
        <FormAction  action='submit' handleSubmit={handleSubmit} text="Register"/>
        {successMessage && <Message type={"success"} message={successMessage} disappear />}
      {errorMessage && <Message type={"error"} message={errorMessage} disappear/>}
      </form>
    )
}