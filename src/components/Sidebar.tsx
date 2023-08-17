import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

type SidebarItem ={
    icon: JSX.Element;
    text: string;
  }
  
  type SidebarProps ={
    items: SidebarItem[];
  }
  
  const Sidebar: React.FC<SidebarProps> = ({ items }) => {
      const [showText, setShowText] = useState(true);
    
      const toggleText = () => {
        setShowText(!showText);
      };
    
      return (
        <aside
          className={`fixed top-0 left-0 z-40 w-${showText ? '64' : '16'} h-screen transition-all duration-300`}
          aria-label="Sidebar"
        >
          <div className={`pl-4 pt-2 bg-gray-50 dark:bg-gray-800`}>
            <button
              className="text-gray-200 rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
              onClick={toggleText}
            >
              <FaBars className="w-6 h-6" />
            </button>
          </div>
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-6 font-medium ">
              {items.map((item, index) => (
                <li key={index} className={`${showText && 'border-b-2 border-gray-700'}`}>
                  <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ">
                    {React.cloneElement(item.icon, {
                      className: `w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                      }`,
                    })}
                    {showText && <span className="ml-3">{item.text}</span>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      );
    };
    
    export default Sidebar