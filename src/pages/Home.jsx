import { MoveRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import PhotoContainer from "../components/PhotoContainer";

const Home = () => {
  const navigator = useNavigate();

  return (
    <div className="flex flex-row justify-start h-[90vh] p-3 md:justify-center">
      <div className="flex flex-col w-fit md:text-center mt-10">
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
