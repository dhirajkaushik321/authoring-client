import React, { useState, useEffect } from 'react';

interface MessageProps {
  type: 'error' | 'success' | 'warning';
  message: string;
}

const Message: React.FC<MessageProps> = ({ type, message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000); // Set the duration in milliseconds (3 seconds in this case)

    return () => {
      clearTimeout(timer);
    };
  }, []);

  let bgColor = '';
  let textColor = '';
  let animation = '';

  switch (type) {
    case 'error':
      bgColor = 'bg-red-500';
      textColor = 'text-white';
      animation = 'animate-fadeInDown';
      break;
    case 'success':
      bgColor = 'bg-green-500';
      textColor = 'text-white';
      animation = 'animate-fadeInDown';
      break;
    case 'warning':
      bgColor = 'bg-yellow-500';
      textColor = 'text-black';
      animation = 'animate-fadeInDown';
      break;
    default:
      bgColor = 'bg-gray-500';
      textColor = 'text-white';
  }

  return (
    <div
      className={`p-4 ${bgColor} ${textColor} rounded shadow-md ${
        isVisible ? animation : 'animate-fadeOutUp'
      }`}
    >
      {message}
    </div>
  );
};

export default Message;
