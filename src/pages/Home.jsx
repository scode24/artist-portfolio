import axios from "axios";
import { MoveRight } from "lucide-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import PhotoContainer from "../components/PhotoContainer";
import useArtistInfoStore from "../stores/ArtistInfoStore";

const Home = () => {
  const { artistInfo, addArtistInfo } = useArtistInfoStore();
  const navigator = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (artistInfo != undefined) return;

      const response = await axios.get(
        import.meta.env.VITE_API_ENDPOINT + "/getArtistInfo"
      );
      addArtistInfo(response.data);
    };
    fetchData();
  }, []);

  return (
    <div
      className="flex flex-row justify-start p-3 overflow-y-auto md:justify-center"
      style={{ height: "calc(100vh - 65px)" }}
    >
      <div className="flex flex-col w-fit ml-3 md:text-center mt-10">
        <span className="text-6xl font-medium">Sayantani Dey</span>
        <span className="mt-3 text-2xl font-light">
          Artist with a passion for classical art forms
        </span>

        <div className="flex-row justify-center mt-[30px] md:flex">
          <Button
            config={{
              title: "Browse Work",
              rightIcon: <MoveRight strokeWidth={2} />,
              isHighlighted: true,
              onClickFn: () => {
                navigator("/artwork/all");
              },
            }}
          />
        </div>
        <div className="flex-row justify-center mt-[50px] hidden md:flex">
          <PhotoContainer
            config={{
              photoPath: [
                "../images/mainpage1.jpeg",
                "../images/mainpage2.jpeg",
              ],
              title: "Classic Sculpture",
              artist: "Sayantani Dey",
              category: "Madhubani",
              about:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus dignissim velit at",
              artDescription: {
                materialUsed: "Fine liner",
                paperType: "Chromatic Paper",
                dimension: "20x20cm",
              },
              layout: "landscape",
            }}
            renderPageConfig={{
              fromPage: "home",
            }}
          />
        </div>
        <div className="flex-row justify-center mt-[50px] md:hidden">
          <PhotoContainer
            config={{
              photoPath: ["../images/mainpage-m.jpeg"],
              title: "Classic Sculpture",
              artist: "Sayantani Dey",
              catagory: "Madhubani",
              about:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus dignissim velit at",
              artDescription: {
                materialUsed: "Fine liner",
                paperType: "Chromatic Paper",
                dimension: "20x20cm",
              },
              layout: "potrait",
            }}
            renderPageConfig={{
              fromPage: "home",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
