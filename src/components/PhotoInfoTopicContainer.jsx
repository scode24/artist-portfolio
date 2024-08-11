import { Brush, Link, Paintbrush } from "lucide-react";
import React, { useState } from "react";
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
    <div className="flex flex-col mt-3 md:m-0">
      {topicList.map((item, index) => (
        <PhotoInfoTopic key={index} data={item} />
      ))}
    </div>
  );
};

export default PhotoInfoTopicContainer;
