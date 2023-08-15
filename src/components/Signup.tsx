import { useState } from 'react';
import { registrationFields} from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import User from '../models/user.model';

const fields=registrationFields;

export default function Register(){
    const [registrationState,setregistrationState]=useState<User>({username:"",password:"",email:"",confirmPassword:""});

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setregistrationState({...registrationState,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
    registerUser();
    }

    //Handle Login API Integration here
    const registerUser = () =>{
        console.log("Submission data",registrationState)
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

      </form>
    )
}