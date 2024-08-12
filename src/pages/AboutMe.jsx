import axios from "axios";
import React, { useEffect } from "react";
import useArtistInfoStore from "../stores/ArtistInfoStore";

const AboutMe = () => {
  const { artistInfo, addArtistInfo } = useArtistInfoStore();

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

  return artistInfo ? (
    <div className="flex flex-col justify-center items-center h-[90vh] p-5">
      <img
        className="rounded-full w-[100px] h-[100px] md:w-[120px] md:h-[120px] bg-gray-200"
        src={artistInfo.photo}
      />
      <span className="text-3xl font-medium mt-5">{artistInfo.name}</span>

      <div className="overflow-auto">
        <div className="mt-7 md:mx-[10%] lg:mx-[20%]">
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
  ) : (
    <span>Loading...</span>
  );
};

export default AboutMe;
