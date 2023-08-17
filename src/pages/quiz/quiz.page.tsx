
import React from 'react';
import { FaListAlt, FaCheckSquare, FaEdit, FaArrowsAltH } from 'react-icons/fa';
import Sidebar from '../../components/Sidebar';

const MainContent: React.FC = () => {
  return (
    <div className="p-4 sm:ml-64">
      {/* Main content */}
      {/* Replace with your main content */}
    </div>
  );
};


  const items = [
    { icon: <FaListAlt />, text: 'Single answer MCQ' },
    { icon: <FaCheckSquare />, text: 'Multiple answer MCQ' },
    { icon: <FaEdit />, text: 'Fill in the blanks' },
    { icon: <FaArrowsAltH />, text: 'Match the following' },
  ];
  
  const QuizApp: React.FC = () => {
    return (
      <div className="flex">
        <Sidebar items={items} />
        <MainContent/>
        {/* Rest of your components */}
      </div>
    );
  };
  
  export default QuizApp;
