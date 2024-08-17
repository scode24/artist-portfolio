import { Brush, Info, Link, MessageCircle, Paintbrush } from "lucide-react";
import React, { useState } from "react";
import Button from "./Button";
import FeedbackContainer from "./FeedbackContainer";
import PhotoInfoTopic from "./PhotoInfoTopic";

const PhotoInfoTopicContainer = (props) => {
  const artwork = props.artwork;
  const [optionSelected, setOptionSelected] = useState("information");
  const [topicList, setTopicList] = useState([
    {
      title: artwork.title,
      icon: <Brush strokeWidth={2} />,
      content: artwork.about,
    },
    {
      title: "Materials Used",
      icon: <Paintbrush strokeWidth={2} />,
      content: (
        <ul>
          <li>{artwork.artDescription.materialUsed}</li>
          <li>{artwork.artDescription.paperType}</li>
          <li>{artwork.artDescription.dimension}</li>
        </ul>
      ),
    },
    {
      title: "Photo Links",
      icon: <Link strokeWidth={2} />,
      content: "test",
    },
  ]);

  return (
    <div className="p-3 rounded-xl glass h-[100%] md:m-0 md:rounded-r-xl md:rounded-l-none">
      <div className="flex flex-row">
        <Button
          config={{
            title: "Information",
            leftIcon: <Info strokeWidth={2} />,
            onClickFn: () => {
              setOptionSelected("information");
            },
          }}
        />

        <Button
          config={{
            title: "Feedback",
            leftIcon: <MessageCircle strokeWidth={2} />,
            onClickFn: () => {
              setOptionSelected("feedback");
            },
          }}
        />
      </div>

      {optionSelected === "information" &&
        topicList.map((topic, index) => (
          <div className="flex flex-col mt-5 mx-2">
            <PhotoInfoTopic key={index} data={topic} />
          </div>
        ))}

      {optionSelected === "feedback" && (
        <FeedbackContainer data={artwork._id} />
      )}
    </div>
  );
};

export default PhotoInfoTopicContainer;
