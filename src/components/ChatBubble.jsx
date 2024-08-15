import React from "react";

const ChatBubble = (props) => {
  const { senderName, senderEmail, message } = props.data;

  return (
    <div className="w-full">
      <div className="flex flex-col rounded-lg text-sm p-3 low-glass w-[70%] ml-auto">
        <span className="font-medium">{senderName}</span>
        <span>{senderEmail}</span>
        <p className="mt-3">{message}</p>
      </div>
    </div>
  );
};

export default ChatBubble;
