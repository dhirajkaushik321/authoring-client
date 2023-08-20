
import React from 'react';
import { FaListAlt, FaCheckSquare, FaEdit, FaArrowsAltH } from 'react-icons/fa';
import Navbar from '../../components/Navbar';

// const MainContent: React.FC = () => {
//   return (
//     // <div className="max-w-md h-screen" >
//         // <div className="bg-gray-900 h-screen" style={{"maxWidth": "100%", "height":"0"}}>
//     <div>
//       {/* Main content */}
//       {/* Replace with your main content */}
//     </div>
//   );
// };


  
  
  const NavbarApp: React.FC = () => {
    return (
      <div className="flex">
        {/* <Navbar items={items} />         */}
        <Navbar /> 
        {/* <MainContent/> */}
        {/* Rest of your components */}
      </div>
    );
  };
  
  export default NavbarApp;
