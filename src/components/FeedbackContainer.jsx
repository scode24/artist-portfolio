import axios from "axios";
import { Send } from "lucide-react";
import { useEffect, useState } from "react";
import useDialogStore from "../stores/DialogStore";
import useUserAuthStore from "../stores/UserAuthStore";
import ChatBubble from "./ChatBubble";

const FeedbackContainer = (props) => {
  const photoId = props.data;
  const [feedbackList, setFeedbackList] = useState([]);
  const [newFeedback, setNewFeedback] = useState("");
  const { loggedInUser } = useUserAuthStore();
  const { push } = useDialogStore();

  useEffect(() => {
    fetchFeedback();
  }, [feedbackList]);

  const fetchFeedback = async () => {
    const response = await axios.post(
      import.meta.env.VITE_API_ENDPOINT + "/getFeedbackByPhotoId",
      {
        photoId,
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );
    setFeedbackList(response.data);
  };

  const sendFeedback = async () => {
    if (loggedInUser === undefined) {
      push("You must be logged in to leave feedback");
      return;
    }

    const response = await axios.post(
      import.meta.env.VITE_API_ENDPOINT + "/sendFeedback",
      {
        photoId,
        feedback: newFeedback,
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );

    fetchFeedback();
  };

  const handleInputChange = (e) => {
    setNewFeedback(e.target.value);
  };

  return (
    <div className="flex flex-col justify-between h-[95%] md:p-3">
      <div className="flex flex-col rounded-xl shadow-inner h-[300px] overflow-auto md:h-[425px]">
        {feedbackList.map((feedback, index) => (
          <ChatBubble key={index} data={feedback} />
        ))}
      </div>

      <div className="flex flex-row rounded-md border p-1 bg-white border-zinc-300 shadow-inner w-full">
        <textarea
          className="p-2 w-full"
          name="feedback"
          rows={3}
          type="text"
          placeholder="What do you think about this photo? Any feedback or suggestions?"
          onChange={(e) => handleInputChange(e)}
        />
        <div
          className="flex flex-col justify-center my-2 mr-3 cursor-pointer"
          onClick={() => sendFeedback()}
        >
          <Send strokeWidth={2} />
        </div>
      </div>
    </div>
  );
};

export default FeedbackContainer;
