import React from "react";
import PhotoInfoBoxActionsMenu from "./PhotoInfoBoxActionsMenu";
import PhotoInfoTopicContainer from "./PhotoInfoTopicContainer";

const PhotoInfoBox = (props) => {
  const artwork = props.artwork;
  const { showActionMenu } = props.config;

  const getWidth = () => {
    const baseClasses = "hover:border-[2px] hover:border-indigo-700";
    let widthClass;

    switch (artwork.layout) {
      case "landscape":
        widthClass = "md:w-[50rem]";
        break;
      case "portrait":
        widthClass = "md:w-[25rem]";
        break;
      default:
        widthClass = "";
        break;
    }

    return `${widthClass} ${baseClasses}`;
  };

  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-col w-fit m-5 md:flex-row md:m-0">
        <div className={"rounded-l-xl glass w-fit " + getWidth()}>
          <img
            className={"rounded-xl p-3"}
            src={artwork.photoPath[0]}
            alt="user_pic"
          />
          {showActionMenu && (
            <PhotoInfoBoxActionsMenu
              data={{
                photoPath: artwork.photoPath[0],
              }}
            />
          )}
        </div>
        <PhotoInfoTopicContainer artwork={artwork} />
      </div>
    </div>
  );
};

export default PhotoInfoBox;
