import { Brush, Info, Link, MessageCircle, Paintbrush } from "lucide-react";
import React, { useState } from "react";
import Button from "./Button";
import PhotoInfoTopic from "./PhotoInfoTopic";

const PhotoInfoTopicContainer = (props) => {
  const artwork = props.artwork;
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
    <div className="p-5 rounded-r-xl glass md:m-0">
      <div className="flex flex-row">
        <Button
          config={{
            title: "Information",
            leftIcon: <Info strokeWidth={2} />,
            onClickFn: () => {
              navigator("/artwork/all");
            },
          }}
        />

        <Button
          config={{
            title: "Feedback",
            leftIcon: <MessageCircle strokeWidth={2} />,
            onClickFn: () => {
              navigator("/artwork/all");
            },
          }}
        />
      </div>
      <div className="flex flex-col mt-5">
        {topicList.map((item, index) => (
          <PhotoInfoTopic key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default PhotoInfoTopicContainer;
