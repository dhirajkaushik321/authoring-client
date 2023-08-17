import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/signup/signup.page';
import LoginPage from './pages/login/login.page';
import QuizApp from './pages/quiz/quiz.page';

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/quiz" element={<QuizApp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
