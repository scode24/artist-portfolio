import { Maximize } from "lucide-react";
import React from "react";
import useDialogStore from "../stores/DialogStore";

const PhotoInfoBoxActionsMenu = (props) => {
  const { photoPath } = props.data;

  const { push } = useDialogStore();

  return (
    <div className="flex flex-row justify-end py-3">
      {/* <div className="flex flex-col justify-center mr-2">10</div> */}
      {/* <div className="flex flex-col justify-center mr-3 cursor-pointer">
        <Heart size={20} strokeWidth={2} />
      </div> */}

      <div
        className="flex flex-col justify-center mr-3 cursor-pointer"
        onClick={() =>
          push(
            <img
              src={photoPath}
              alt="full_screen_image"
              className="object-contain h-[90vh]"
            />
          )
        }
      >
        <Maximize size={20} strokeWidth={2} />
      </div>

      {/* <div className="flex flex-col justify-center mr-3 cursor-pointer">
        <MessageCircle size={20} strokeWidth={2} />
      </div> */}
    </div>
  );
};

export default PhotoInfoBoxActionsMenu;
