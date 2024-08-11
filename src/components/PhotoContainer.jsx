import { Heart, InfoIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import useDialogStore from "../stores/DialogStore";

const PhotoContainer = (props) => {
  const {
    _id,
    photoPath,
    title,
    artist,
    category,
    about,
    artDescription,
    layout,
    likeCount,
  } = props.config;

  const { fromPage } = props.renderPageConfig;

  const navigate = useNavigate();

  const { push } = useDialogStore();

  const handleOnClick = () => {
    if (fromPage !== "home") {
      navigate(`/artwork/photoinfo/${_id}`);
    }
  };

  const getWidth = (isHighlightRequired = false) => {
    const baseClasses = "hover:border-[2px] hover:border-indigo-700";
    let widthClass;

    if (fromPage === "home") {
      widthClass = layout === "landscape" ? "w-[70rem]" : "w-[100%]";
    } else {
      switch (layout) {
        case "landscape":
          widthClass = "w-[350px] h-[230px]";
          break;
        case "portrait":
          widthClass = "w-[150px] h-[230px]";
          break;
        default:
          widthClass = "";
          break;
      }
    }

    return isHighlightRequired ? `${widthClass} ${baseClasses}` : widthClass;
  };

  const getRandomImage = () => {
    return photoPath[Math.floor(Math.random() * photoPath.length)];
  };

  const getInformation = (e) => {
    e.stopPropagation();
    return (
      <table className="w-[250px] md:w-[320px]">
        <tbody>
          <tr>
            <td className="font-medium">Title</td>
            <td>{title}</td>
          </tr>
          <tr>
            <td className="font-medium">Category</td>
            <td>{category}</td>
          </tr>
          <tr>
            <td className="font-medium">Material Used</td>
            <td>{artDescription.materialUsed}</td>
          </tr>
          <tr>
            <td className="font-medium">Paper Type</td>
            <td>{artDescription.paperType}</td>
          </tr>
          <tr>
            <td className="font-medium">Dimension</td>
            <td>{artDescription.dimension}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div
      className={
        "relative cursor-pointer m-2 bg-gray-200 shadow-xl " + getWidth()
      }
      onClick={() => handleOnClick()}
    >
      <img
        src={getRandomImage()}
        alt={title}
        className={"rounded-md object-fill " + getWidth(true)}
      />

      <div className="absolute right-3 top-3">
        <div
          className="rounded-md flex flex-col bg-white"
          onClick={(e) => push(getInformation(e))}
        >
          <div className="p-2 shadow-md cursor-pointer hover:text-green">
            <InfoIcon strokeWidth={2} />
          </div>
        </div>
      </div>

      {likeCount > 0 && (
        <div className="rounded-md absolute right-3 bottom-3 bg-white">
          <div className="flex flex-col">
            <div className="p-2 shadow-md">
              <span>{likeCount}</span>
            </div>

            <div className="p-2 shadow-md cursor-pointer hover:text-green-700">
              <Heart strokeWidth={2} color="red" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoContainer;
