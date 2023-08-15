type LoginUser = {
    email: string;
    password: string;
    [key: string]: string; // Index signature

};

export default LoginUser;