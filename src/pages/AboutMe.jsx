import axios from "axios";
import React, { useEffect, useState } from "react";

const AboutMe = () => {
  const [artistData, setArtistData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        import.meta.env.VITE_API_ENDPOINT + "/getArtistInfo"
      );
      setArtistData(response.data);
    };
    fetchData();
  }, []);

  return artistData ? (
    <div className="flex flex-col justify-center items-center h-[90vh] p-5">
      <img
        className="rounded-full w-[100px] h-[100px] md:w-[120px] md:h-[120px] bg-gray-200"
        src={artistData.photo}
      />
      <span className="text-3xl font-medium mt-5">{artistData.name}</span>

      <div className="overflow-auto">
        <div className="mt-7 md:mx-[10%] lg:mx-[20%]">
          {artistData.about}

          <div className="flex flex-col mt-5">
            <span>Awards and recognitions -</span>
            {artistData.awards.map((award, index) => (
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
