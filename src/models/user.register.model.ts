type RegisterUser = {
    username: string;
    email: string;
    password: string;
    [key: string]: string; // Index signature
};

export default RegisterUser;