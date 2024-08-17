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
      <div
        className="overflow-y-auto md:m-5"
        style={{ height: "calc(100vh - 132px)" }}
      >
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
