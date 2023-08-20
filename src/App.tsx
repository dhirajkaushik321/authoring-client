import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/signup/signup.page';
import LoginPage from './pages/login/login.page';
import NavbarApp from './pages/navbar/navbar.page';
import HomePage from './pages/home/home.page';

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />              
            <Route path="/home" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
