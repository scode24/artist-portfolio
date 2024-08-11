import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useArtworkStore from "../stores/ArtworkStore";
import PhotoContainer from "./PhotoContainer";

function ArtWorkSearchContainer() {
  const { data, addArtwork } = useArtworkStore();
  const [filteredPhotoList, setFilteredPhotoList] = useState();
  const [param] = useSearchParams();

  useEffect(() => {
    setFilteredPhotoList(
      searchArtworks(data, param.get("value")?.toLowerCase())
    );
  }, [param, data]);

  const searchArtworks = (artworks, searchValue) => {
    searchValue = searchValue.toLowerCase();

    return artworks.filter((artwork) => {
      return (
        (artwork.title && artwork.title.toLowerCase().includes(searchValue)) ||
        (artwork.artist &&
          artwork.artist.toLowerCase().includes(searchValue)) ||
        (artwork.category &&
          artwork.category.toLowerCase().includes(searchValue)) ||
        (artwork.about && artwork.about.toLowerCase().includes(searchValue)) ||
        (artwork.artDescription &&
          artwork.artDescription.materialUsed &&
          artwork.artDescription.materialUsed
            .toLowerCase()
            .includes(searchValue)) ||
        (artwork.artDescription &&
          artwork.artDescription.paperType &&
          artwork.artDescription.paperType
            .toLowerCase()
            .includes(searchValue)) ||
        (artwork.layout && artwork.layout.toLowerCase().includes(searchValue))
      );
    });
  };

  return filteredPhotoList !== undefined && filteredPhotoList.length > 0 ? (
    <div>
      <div className="m-5">Search term : {param.get("value")}</div>
      <div className="flex flex-wrap p-5 md:mx-[10%]">
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
    </div>
  ) : (
    <span>Loading...</span>
  );
}

export default ArtWorkSearchContainer;
