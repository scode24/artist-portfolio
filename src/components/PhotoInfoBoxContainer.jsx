import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useArtworkStore from "../stores/ArtworkStore";
import PhotoInfoBox from "./PhotoInfoBox";

const PhotoInfoBoxContainer = () => {
  const param = useParams();
  const { data } = useArtworkStore();
  const [selectedArtWork, setSelectedArtWork] = useState();

  useEffect(() => {
    const artwork = data.find((artwork) => artwork._id === param.photoId);
    setSelectedArtWork(artwork);
  }, [param, data]);

  return (
    selectedArtWork && (
      <div className="h-[100vh]  md:m-10">
        <PhotoInfoBox
          artwork={selectedArtWork}
          config={{
            showActionMenu: true,
          }}
        />
      </div>
    )
  );
};

export default PhotoInfoBoxContainer;
