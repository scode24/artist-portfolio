import { Info, X } from "lucide-react";
import React from "react";
import useDialogStore from "../stores/DialogStore";

const Dialog = () => {
  const { data, push } = useDialogStore();

  if (data === undefined) return null;

  return (
    <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full z-10 bg-transparent backdrop-blur-sm">
      <div className="rounded-md mx-3 bg-white/80 glass">
        <div className="rounded-t-md flex flex-row justify-between p-3 border-b">
          <div className="flex flex-row">
            <div className="flex flex-col justify-center mr-3">
              <Info strokeWidth={2} />
            </div>
            <div className="flex flex-col justify-center mr-3">
              <span className="font-medium">Information</span>
            </div>
          </div>

          <div
            className="flex flex-col justify-center mr-3 cursor-pointer"
            onClick={() => push(undefined)}
          >
            <X strokeWidth={2} />
          </div>
        </div>

        <div className="rounded-b-md flex flex-col p-3">{data}</div>
      </div>
    </div>
  );
};

export default Dialog;
