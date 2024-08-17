import React from "react";
import useArtistInfoStore from "../stores/ArtistInfoStore";

const AboutMe = () => {
  const { artistInfo } = useArtistInfoStore();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (artistInfo != undefined) return;

  //     const response = await axios.get(
  //       import.meta.env.VITE_API_ENDPOINT + "/getArtistInfo"
  //     );
  //     addArtistInfo(response.data);
  //   };
  //   fetchData();
  // }, []);

  return artistInfo ? (
    <div className="flex flex-row justify-center h-[100vh] p-5">
      <div className="flex flex-col rounded-xl justify-center glass p-5 h-fit mt-5 md:p-7 md:w-[70%] md:mt-20 lg:w-[60%]">
        <img
          className="rounded-full w-[100px] h-[100px] mx-auto md:w-[120px] md:h-[120px] bg-gray-200"
          src={artistInfo.photo}
        />
        <span className="text-3xl font-medium mt-5 mx-auto">
          {artistInfo.name}
        </span>

        <div className="h-[300px] overflow-auto">
          <div className="mt-7">
            {artistInfo.about}

            <div className="flex flex-col mt-5">
              <span>Awards and recognitions -</span>
              {artistInfo.awards.map((award, index) => (
                <span key={index}>{award}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <span>Loading...</span>
  );
};

export default AboutMe;
