import React, { useEffect, useState } from 'react';

type MessageProps= {
  type: 'error' | 'success' | 'warning';
  message: string;
  disappear?:boolean
  size?:'small' | 'big'
}

const Message: React.FC<MessageProps> = ({ type, message,disappear,size='big' }) => {
    const [show,setShow] =useState<boolean>(true)
  let bgColor = '';
  let textColor = '';
useEffect(()=>{
if(disappear){
    setTimeout(() => { setShow(false) }, 2000)

}
})
  switch (type) {
    case 'error':
      bgColor = 'bg-red-500';
      textColor = 'text-white';
      break;
    case 'success':
      bgColor = 'bg-green-500';
      textColor = 'text-white';
      break;
    case 'warning':
      bgColor = 'bg-yellow-500';
      textColor = 'text-black';
      break;
    default:
      bgColor = 'bg-gray-500';
      textColor = 'text-white';
  }

  return (
    show ? <div className={`${size==='small'?'p-2':'p-4'} ${bgColor} ${textColor} rounded shadow-md`}>
      {message}
    </div>:<></>
  );
};

export default Message;
