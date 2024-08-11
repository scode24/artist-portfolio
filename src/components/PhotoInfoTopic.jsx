import React from "react";

const PhotoInfoTopic = (props) => {
  const { title, icon, content } = props.data;

  return (
    <div className="flex flex-col">
      <div className="flex flex-row font-medium border-b py-3">
        <div className="flex flex-col justify-center mr-3">{icon}</div>
        <div className="flex flex-col justify-center">{title}</div>
      </div>
      <div className="py-3">{content}</div>
    </div>
  );
};

export default PhotoInfoTopic;
