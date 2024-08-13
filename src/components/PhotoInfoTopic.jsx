import React from "react";

const PhotoInfoTopic = (props) => {
  const { title, icon, content } = props.data;

  return (
    <div className="flex flex-col mb-5 md:mb-7">
      <div className="flex flex-row font-medium">
        <div className="flex flex-col justify-center mr-3">{icon}</div>
        <div className="flex flex-col justify-center">{title}</div>
      </div>
      <div className="mt-3 w-full">{content}</div>
    </div>
  );
};

export default PhotoInfoTopic;
