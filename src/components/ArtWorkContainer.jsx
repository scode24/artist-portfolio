import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useArtworkStore from "../stores/ArtworkStore";
import PhotoContainer from "./PhotoContainer";

function ArtWorkContainer() {
  const { data, addArtwork } = useArtworkStore();
  const [filteredPhotoList, setFilteredPhotoList] = useState();
  const param = useParams();

  useEffect(() => {
    if (param.tag === "all") {
      setFilteredPhotoList(data);
    } else {
      setFilteredPhotoList(
        data.filter((artwork) => artwork.category.toLowerCase() === param.tag)
      );
    }
  }, [param, data]);

  return filteredPhotoList !== undefined && filteredPhotoList.length > 0 ? (
    <div className="flex flex-wrap p-5 overflow-y-autoauto h-[100vh] md:mx-[10%]">
      {filteredPhotoList.map((artworkData, index) => (
        <PhotoContainer
          key={index}
          config={artworkData}
          renderPageConfig={{
            fromPage: "artwork",
          }}
        />
      ))}
    </div>
  ) : (
    <span>Loading...</span>
  );
}

export default ArtWorkContainer;
