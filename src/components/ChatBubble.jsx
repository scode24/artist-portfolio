import React from "react";

const ChatBubble = (props) => {
  const { senderName, senderEmail, message, align } = props.data;

  return (
    <div className="w-full p-2">
      <div
        className="flex flex-col rounded-lg text-sm mb-0 p-3 low-glass w-[70%]"
        style={align === "right" ? { marginLeft: "auto" } : {}}
      >
        <div className="flex flex-col text-xs">
          <span className="font-medium">{senderName}</span>
          <span>{senderEmail}</span>
        </div>
        <p className="mt-3">{message}</p>
      </div>
    </div>
  );
};

export default ChatBubble;
