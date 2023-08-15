import { useState } from "react";
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import LoginUser from "../models/user.login.model";
import axios from "axios";
import Message from "./Message";
const loginApi = process.env.REACT_APP_LOGIN_API;

const fields = loginFields;

export default function Login() {
  const [loginState, setLoginState] = useState<LoginUser>({
    password: "",
    email: "",
  });
  const [successMessage, setSuccessMessag] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginState({ ...loginState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = async () => {
    console.log("Submission data", loginState);
    console.log("loginApi: ", loginApi);
    //make a axios post request to loginApi endpoint and pass loginState as body data
    try {
      if (loginApi) {
        const loginApiResponse = await axios.post(loginApi, loginState);
        console.log("loginApiResponse: ", loginApiResponse.data);
        setSuccessMessag(loginApiResponse.data.message);
        // alert(loginApiResponse.data.message);
      }
    } catch (error) {
      //handling error in case the request fails
      setErrorMessage("Invalid user credentials!!");
      // alert(`Error occured while logging in user`);
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.name]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
      {successMessage && <Message type={"success"} message={successMessage} />}
      {errorMessage && <Message type={"error"} message={errorMessage} />}
    </form>
  );
}
