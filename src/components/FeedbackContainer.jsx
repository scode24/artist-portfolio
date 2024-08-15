import { Send } from "lucide-react";
import React from "react";
import ChatBubble from "./ChatBubble";

const FeedbackContainer = (props) => {
  const photoId = props.data;

  return (
    <div className="flex flex-col justify-between h-[95%] md:p-3">
      <div className="flex flex-col">
        <ChatBubble
          data={{
            senderName: "Sayantani Dey",
            senderEmail: "sarkari@example.com",
            message:
              "lorem150 charactersLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum tempus felis vel",
          }}
        />
      </div>

      <div className="flex flex-row rounded-lg border text-sm p-2 bg-white border-zinc-300 shadow-inner w-full">
        <textarea
          className="m-2 w-full"
          rows={3}
          type="text"
          placeholder="What do you think about this photo? Any feedback or suggestions?"
          onChange={(e) => handleSearchInput(e)}
        />
        <div
          className="flex flex-col justify-center my-2 mr-3 cursor-pointer"
          onClick={() => searchFn(searchValue)}
        >
          <Send strokeWidth={2} />
        </div>
      </div>
    </div>
  );
};

export default FeedbackContainer;
