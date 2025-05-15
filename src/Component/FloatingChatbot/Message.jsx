import React from 'react';

const Message = ({ text, sender }) => {
  return (
    <div className={`message mb-2 ${sender === 'user' ? 'text-end' : 'text-start'}`}>
      {text}
    </div>
  );
};

export default Message;
